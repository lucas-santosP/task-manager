import React, { createContext, useContext } from "react";
import { TemplateServices } from "../../services/templates";
import { ITemplate } from "../../types/template";
import { useTemplateReducer } from "./templateReducer";
import { ITemplateContext, TemplateActions } from "./types";

const UserContext = createContext({} as ITemplateContext);

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

  return (
    <UserContext.Provider
      value={{ ...state, fetchTemplates, createTemplate, updateTemplate, deleteTemplate }}
    >
      {children}
    </UserContext.Provider>
  );
};

export function useTemplateContext(): ITemplateContext {
  const context = useContext(UserContext);
  return { ...context };
}
