import {
  ITask,
  ICreateTaskPayload,
  IDeleteTaskPayload,
  IUpdateTaskPayload,
} from "../../types/task";
import {
  ITemplate,
  ICreateTemplatePayload,
  IUpdateTemplatePayload,
  IDeleteTemplatePayload,
} from "../../types/template";

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
  createTemplate: (payload: ICreateTemplatePayload) => Promise<void>;
  updateTemplate: (payload: IUpdateTemplatePayload) => Promise<void>;
  deleteTemplate: (payload: IDeleteTemplatePayload) => Promise<void>;
  createTask: (payload: ICreateTaskPayload) => Promise<void>;
  updateTask: (payload: IUpdateTaskPayload) => Promise<void>;
  deleteTask: (payload: IDeleteTaskPayload) => Promise<void>;
  latestTasks: ITask[];
}
