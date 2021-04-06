import { ITask } from "./task";

export interface ITemplate {
  _id: string;
  name: string;
  description: string;
  tasks: ITask[];
  createdAt: string;
  updatedAt: string;
  __v?: number;
}

export interface ICreateTemplatePayload {
  name: string;
  description: string;
}

export interface IUpdateTemplatePayload {
  _id: string;
  name: string;
  description: string;
}

export interface IDeleteTemplatePayload {
  templateId: string;
}
