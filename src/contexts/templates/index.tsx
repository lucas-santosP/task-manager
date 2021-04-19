import React, { createContext, useContext, useMemo } from "react";
import { TemplateServices } from "../../services/templates";
import { TaskServices } from "../../services/tasks";
import { ICreateTaskPayload, ITask } from "../../types/task";
import {
  ICreateTemplatePayload,
  IUpdateTemplatePayload,
  IDeleteTemplatePayload,
} from "../../types/template";
import { useTemplateReducer } from "./templateReducer";
import { ITemplateContext, TemplateActions } from "./types";

const TemplateContext = createContext({} as ITemplateContext);

export const TemplateContextProvider: React.FC = ({ children }) => {
  const [state, dispatch] = useTemplateReducer();

  async function fetchTemplates() {
    const response = await TemplateServices.get();
    const { templates } = response.data;
    dispatch({ type: TemplateActions.SET, payload: { templates } });
    console.log("templates fetched", templates);
  }

  async function createTemplate(payload: ICreateTemplatePayload) {
    const response = await TemplateServices.create(payload);
    const { template } = response.data;
    dispatch({ type: TemplateActions.CREATE, payload: { template } });
  }

  async function updateTemplate(payload: IUpdateTemplatePayload) {
    const response = await TemplateServices.update(payload);
    const { template } = response.data;
    dispatch({ type: TemplateActions.UPDATE, payload: { template } });
  }

  async function deleteTemplate(payload: IDeleteTemplatePayload) {
    try {
      const response = await TemplateServices.delete(payload);
      const { template } = response.data;
      if (template?.ok) {
        dispatch({ type: TemplateActions.DELETE, payload: { templateId: payload.templateId } });
      } else {
        throw new Error();
      }
    } catch (error) {
      throw new Error("Unable to delete the template, try later.");
    }
  }

  async function createTask(payload: ICreateTaskPayload) {
    try {
      const templateToUpdate = state.templates.find(
        (template) => template._id === payload.templateId
      );
      if (!templateToUpdate) throw new Error();

      const response = await TaskServices.create(payload);
      const { task } = response.data;
      templateToUpdate.tasks.push(task);
      dispatch({ type: TemplateActions.UPDATE, payload: { template: templateToUpdate } });
    } catch (error) {}
  }

  const latestTasks = useMemo(() => {
    let allTasks: ITask[] = [];

    state.templates.forEach((template) => {
      allTasks = [...allTasks, ...template.tasks];
    });

    const tasksOrdered = allTasks.sort((task1, task2) => {
      const date1 = new Date(task1.updatedAt);
      const date2 = new Date(task2.updatedAt);

      if (date1 > date2) return -1;
      else if (date1 < date2) return 1;
      return 0;
    });

    return tasksOrdered.slice(0, 10);
  }, [state.templates]);

  return (
    <TemplateContext.Provider
      value={{
        ...state,
        latestTasks,
        fetchTemplates,
        createTemplate,
        updateTemplate,
        deleteTemplate,
        createTask,
      }}
    >
      {children}
    </TemplateContext.Provider>
  );
};

export function useTemplateContext(): ITemplateContext {
  const context = useContext(TemplateContext);
  return { ...context };
}
