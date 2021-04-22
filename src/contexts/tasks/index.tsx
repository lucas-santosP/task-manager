import React, { createContext, useContext, useMemo } from "react";
import { useTemplateContext } from "../templates";
import { TemplateActions } from "../templates/types";
import { TaskServices } from "../../services/tasks";
import { ITaskContext } from "./types";
import {
  ITask,
  ICreateTaskPayload,
  IUpdateTaskPayload,
  IDeleteTaskPayload,
} from "../../types/task";

const TaskContext = createContext({} as ITaskContext);

export const TaskContextProvider: React.FC = ({ children }) => {
  const { templates, dispatch } = useTemplateContext();

  async function createTask(payload: ICreateTaskPayload) {
    try {
      const templateToUpdate = templates.find((template) => template._id === payload.templateId);
      if (!templateToUpdate) throw new Error();

      const response = await TaskServices.create(payload);
      const { task } = response.data;
      templateToUpdate.tasks.push(task);
      dispatch({ type: TemplateActions.UPDATE, payload: { template: templateToUpdate } });
    } catch (error) {
      throw new Error("Unable to create the task the template, try later.");
    }
  }

  async function updateTask(payload: IUpdateTaskPayload) {
    try {
      const templateToUpdate = templates.find((template) =>
        template.tasks.some((task) => task._id === payload._id)
      );
      if (!templateToUpdate) throw new Error();

      const response = await TaskServices.update(payload);
      const { task } = response.data;
      const index = templateToUpdate.tasks.findIndex((task) => task._id === payload._id);
      templateToUpdate.tasks[index] = { ...task };
      dispatch({ type: TemplateActions.UPDATE, payload: { template: templateToUpdate } });
    } catch (error) {
      throw new Error("Unable to update the task, try later.");
    }
  }

  async function deleteTask(payload: IDeleteTaskPayload) {
    try {
      const templateToUpdate = templates.find((template) =>
        template.tasks.some((task) => task._id === payload.taskId)
      );
      if (!templateToUpdate) throw new Error();

      const response = await TaskServices.delete(payload);
      if (!response.data.task?.ok) throw new Error();

      const index = templateToUpdate.tasks.findIndex((task) => task._id === payload.taskId);
      templateToUpdate.tasks.splice(index, 1);
      dispatch({ type: TemplateActions.UPDATE, payload: { template: templateToUpdate } });
    } catch (error) {
      throw new Error("Unable to update the task, try later.");
    }
  }

  const latestTasks = useMemo(() => {
    let allTasks = [] as ITask[];

    templates.forEach((template) => {
      allTasks = [...allTasks, ...template.tasks];
    });

    const tasksOrdered = allTasks.sort((task1, task2) => {
      const date1 = new Date(task1.updatedAt);
      const date2 = new Date(task2.updatedAt);

      if (date1 > date2) return -1;
      else if (date1 < date2) return 1;
      return 0;
    });

    return tasksOrdered.slice(0, 5);
  }, [templates]);

  return (
    <TaskContext.Provider value={{ latestTasks, createTask, updateTask, deleteTask }}>
      {children}
    </TaskContext.Provider>
  );
};

export function useTaskContext(): ITaskContext {
  const context = useContext(TaskContext);
  return { ...context };
}
