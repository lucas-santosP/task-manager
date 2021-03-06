import { makeAutoObservable, runInAction, toJS } from "mobx";
import { TaskServices } from "../../services/tasks";
import { TemplateServices } from "../../services/templates";
import { setAPIAuthHeader } from "../../services/api";
import {
  ITask,
  ILatestTask,
  ICreateTaskPayload,
  IDeleteTaskPayload,
  IUpdateTaskPayload,
  IUpdateTasksIndexesPayload,
  IUpdateTasksColumnPayload,
} from "../../types/task";
import {
  ITemplate,
  ICreateTemplatePayload,
  IDeleteTemplatePayload,
  IUpdateTemplatePayload,
} from "../../types/template";
import { IRootStore } from "../types";

export class TemplateStore {
  rootStore;
  templates: ITemplate[] = [];
  currentTemplate: ITemplate | null = null;

  constructor(rootStore: IRootStore) {
    this.rootStore = rootStore;
    makeAutoObservable(this);
  }

  async fetchTemplates(token: string) {
    setAPIAuthHeader(token);
    const response = await TemplateServices.get();
    const { templates } = response.data;

    runInAction(() => {
      this.templates = templates;
      console.log("templates fetched", templates.length);
    });
  }

  async createTemplate(payload: ICreateTemplatePayload) {
    const response = await TemplateServices.create(payload);
    const { template } = response.data;

    const newState = [...this.templates];
    newState.push(template);
    runInAction(() => {
      this.templates = newState;
    });
  }

  async updateTemplate(payload: IUpdateTemplatePayload) {
    const response = await TemplateServices.update(payload);
    const { template } = response.data;

    const index = this.templates.findIndex((prevTemplate) => prevTemplate._id === template._id);
    if (index !== -1) {
      const newState = [...this.templates];
      newState[index] = { ...template };
      runInAction(() => {
        this.templates = newState;
      });
    }
  }

  async deleteTemplate(payload: IDeleteTemplatePayload) {
    const response = await TemplateServices.delete(payload);
    const { result } = response.data;

    if (result.ok) {
      runInAction(() => {
        this.templates = this.templates.filter((template) => template._id !== payload.templateId);
      });
    }
  }

  async createTask(payload: ICreateTaskPayload) {
    const indexTemplateToUpdate = this.templates.findIndex(
      (template) => template._id === payload.templateId
    );
    const response = await TaskServices.create(payload);
    const { task } = response.data;

    const newState = [...this.templates];
    newState[indexTemplateToUpdate].tasks.push(task);
    runInAction(() => {
      this.templates = [...newState];
    });
  }

  async updateTask(payload: IUpdateTaskPayload) {
    const indexTemplateToUpdate = this.templates.findIndex((template) =>
      template.tasks.some((task) => task._id === payload._id)
    );
    const indexTaskToUpdate = this.templates[indexTemplateToUpdate].tasks.findIndex(
      (task) => task._id === payload._id
    );

    this.templates[indexTemplateToUpdate].tasks[indexTaskToUpdate].name = payload.name;
    this.templates[indexTemplateToUpdate].tasks[indexTaskToUpdate].status = payload.status;
    // async update after local state update
    await TaskServices.update(payload);
  }

  async updateTasksColumn(payload: IUpdateTasksColumnPayload) {
    const { templateIndex, templateFound } = getTemplateById(this.templates, payload.templateId);
    const { taskIndex, taskFound } = getTaskById(templateFound.tasks, payload.taskId);

    const taskToUpdate = toJS({ ...taskFound, status: payload.status });

    const tasksToUpdated = toJS(templateFound.tasks);
    tasksToUpdated.splice(taskIndex, 1);
    tasksToUpdated.splice(tasksToUpdated.length, 0, taskToUpdate);

    runInAction(() => {
      this.templates[templateIndex].tasks = tasksToUpdated;
    });

    // async update after local state update
    await TaskServices.update(taskToUpdate);
    await TemplateServices.updateTasksIndexes({
      templateId: payload.templateId,
      tasks: tasksToUpdated,
    });
  }

  async updateTasksIndexes(payload: IUpdateTasksIndexesPayload) {
    const templateIndex = this.templates.findIndex(
      (template) => template._id === payload.templateId
    );
    if (templateIndex === -1) throw new Error("Invalid template received");

    const taskIndexFrom = this.templates[templateIndex].tasks.findIndex(
      (task) => task._id === payload.taskIdFrom
    );
    const taskIndexTo = this.templates[templateIndex].tasks.findIndex(
      (task) => task._id === payload.taskIdTo
    );
    if (taskIndexFrom === -1 || taskIndexTo === -1) throw new Error("Invalid tasks received");

    const tasksUpdated = toJS(this.templates[templateIndex].tasks);
    const [taskFrom] = tasksUpdated.splice(taskIndexFrom, 1);
    tasksUpdated.splice(taskIndexTo, 0, { ...taskFrom });

    runInAction(() => {
      this.templates[templateIndex].tasks = tasksUpdated;
    });
    // async update after local state update
    await TemplateServices.updateTasksIndexes({
      templateId: payload.templateId,
      tasks: tasksUpdated,
    });
  }

  async deleteTask(payload: IDeleteTaskPayload) {
    const indexTemplateToUpdate = this.templates.findIndex((template) =>
      template.tasks.some((task) => task._id === payload.taskId)
    );
    const indexTaskToDelete = this.templates[indexTemplateToUpdate].tasks.findIndex(
      (task) => task._id === payload.taskId
    );

    this.templates[indexTemplateToUpdate].tasks.splice(indexTaskToDelete, 1);
    // async update after local state update
    await TaskServices.delete(payload);
  }

  setCurrentTemplate(payload: ITemplate) {
    this.currentTemplate = payload;
  }

  get tasksSegregated() {
    if (!this.currentTemplate) return null;

    return {
      tasksTodo: this.currentTemplate.tasks.filter((task) => task.status === "to do"),
      tasksDoing: this.currentTemplate.tasks.filter((task) => task.status === "doing"),
      tasksDone: this.currentTemplate.tasks.filter((task) => task.status === "done"),
    };
  }

  get latestTasks(): ILatestTask[] {
    const allTasks = [] as ILatestTask[];

    this.templates.forEach((template) => {
      template.tasks.forEach((task) => {
        allTasks.push({
          ...task,
          templateId: template._id,
        });
      });
    });

    const tasksOrdered = allTasks.sort((task1, task2) => {
      const date1 = new Date(task1.updatedAt);
      const date2 = new Date(task2.updatedAt);

      if (date1 > date2) return -1;
      else if (date1 < date2) return 1;
      return 0;
    });

    return tasksOrdered.slice(0, 10);
  }
}

function getTaskById(tasks: ITask[], taskId: string) {
  let taskIndex = -1;
  const taskFound = tasks.find((task, i) => {
    if (task._id === taskId) {
      taskIndex = i;
      return true;
    }
  });

  if (!taskFound) throw new Error("Task not found, invalid id received");
  return { taskIndex, taskFound: { ...taskFound } };
}

function getTemplateById(templates: ITemplate[], templateId: string) {
  let templateIndex = -1;
  const templateFound = templates.find((template, i) => {
    if (template._id === templateId) {
      templateIndex = i;
      return true;
    }
  });

  if (!templateFound) throw new Error("Template not found, invalid id received");
  return { templateIndex, templateFound: { ...templateFound } };
}
