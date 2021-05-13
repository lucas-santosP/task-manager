import { API } from "./api";
import {
  ITemplate,
  ICreateTemplatePayload,
  IUpdateTemplatePayload,
  IDeleteTemplatePayload,
} from "../types/template";
import { ITask } from "../types/task";

interface IGetResponse {
  templates: ITemplate[];
}

interface ICreateResponse {
  template: ITemplate;
}

type IUpdateResponse = ICreateResponse;

interface IUpdateTasksIndexesPayload {
  templateId: string;
  tasks: ITask[];
}

interface IDeleteResponse {
  result: {
    n: number;
    ok: number;
    deletedCount: number;
  };
}

export const TemplateServices = {
  get() {
    return API.get<IGetResponse>(`/template`);
  },

  create(payload: ICreateTemplatePayload) {
    return API.post<ICreateResponse>("/template", payload);
  },

  update(payload: IUpdateTemplatePayload) {
    return API.put<IUpdateResponse>(`/template/${payload._id}`, payload);
  },

  updateTasksIndexes(payload: IUpdateTasksIndexesPayload) {
    return API.put<IUpdateResponse>(`/template/tasks/${payload.templateId}`, {
      tasks: payload.tasks,
    });
  },

  delete(payload: IDeleteTemplatePayload) {
    return API.delete<IDeleteResponse>(`/template/${payload.templateId}`);
  },
};
