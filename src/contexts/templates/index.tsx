import React, { createContext, useContext, useMemo } from "react";
import { TemplateServices } from "../../services/templates";
import { ITask } from "../../types/task";
import { ITemplate } from "../../types/template";
import { useTemplateReducer } from "./templateReducer";
import { ITemplateContext, TemplateActions } from "./types";

const TemplateContext = createContext({} as ITemplateContext);

export const TemplateContextProvider: React.FC = ({ children }) => {
  const [state, dispatch] = useTemplateReducer();

  async function fetchTemplates() {
    const response = await TemplateServices.get();
    const { templates } = response.data;
    dispatch({ type: TemplateActions.SET, payload: { templates } });
    console.log("templates", templates);
  }

  function createTemplate(template: ITemplate) {
    dispatch({ type: TemplateActions.CREATE, payload: { template } });
  }

  function updateTemplate(template: ITemplate) {
    dispatch({ type: TemplateActions.UPDATE, payload: { template } });
  }

  function deleteTemplate(templateId: string) {
    dispatch({ type: TemplateActions.DELETE, payload: { templateId } });
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
