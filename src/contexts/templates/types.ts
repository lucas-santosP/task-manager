import { ITask } from "../../types/task";
import { ITemplate } from "../../types/template";

// Template Reducer
export interface ITemplateReducerState {
  templates: ITemplate[];
}

export enum TemplateActions {
  SET = "SET",
  CREATE = "CREATE",
  UPDATE = "UPDATE",
  DELETE = "DELETE",
}

export interface ISetAction {
  type: TemplateActions.SET;
  payload: { templates: ITemplate[] };
}

export interface ICreateAction {
  type: TemplateActions.CREATE;
  payload: { template: ITemplate };
}

export interface IUpdateAction {
  type: TemplateActions.UPDATE;
  payload: { template: ITemplate };
}

export interface IDeleteAction {
  type: TemplateActions.DELETE;
  payload: { templateId: string };
}

export type TemplateActionsTypes = ISetAction | ICreateAction | IUpdateAction | IDeleteAction;

// Template Context
export interface ITemplateContext extends ITemplateReducerState {
  fetchTemplates: () => Promise<void>;
  createTemplate: (template: ITemplate) => void;
  updateTemplate: (template: ITemplate) => void;
  deleteTemplate: (templateId: string) => void;
  latestTasks: ITask[];
}
