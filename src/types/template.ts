export interface ITemplate {
  _id: string;
  title: string;
  description: string;
  tasks: string[]; // ITask[]
  createdAt: string;
  updatedAt: string;
  __v?: number;
}

export interface ICreateTemplatePayload {
  title: string;
  description: string;
}

export interface IUpdateTemplatePayload {
  _id: string;
  title: string;
  description: string;
}

export interface IDeleteTemplatePayload {
  templateId: string;
}
