import React, { createContext, useContext, useEffect } from "react";
import { TemplateServices } from "../../services/templates";
import { useTemplateReducer } from "./templateReducer";
import { ITemplateContext, TemplateActions } from "./types";
import { useUserContext } from "../user";
import { setAPIAuthHeader } from "../../services/api";
import {
  ICreateTemplatePayload,
  IUpdateTemplatePayload,
  IDeleteTemplatePayload,
} from "../../types/template";

const TemplateContext = createContext({} as ITemplateContext);

export const TemplateContextProvider: React.FC = ({ children }) => {
  const [state, dispatch] = useTemplateReducer();
  const { token } = useUserContext();

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

  useEffect(() => {
    if (token) {
      setAPIAuthHeader(token);
      fetchTemplates();
    }
  }, [token]);

  return (
    <TemplateContext.Provider
      value={{
        ...state,
        dispatch,
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
