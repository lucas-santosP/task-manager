import { API } from "./api";
import {
  ITemplate,
  ICreateTemplatePayload,
  IUpdateTemplatePayload,
  IDeleteTemplatePayload,
} from "../types/template";

interface IGetResponse {
  templates: ITemplate[];
}

interface ICreateResponse {
  template: ITemplate;
}

type IUpdateResponse = ICreateResponse;

interface IDeleteResponse {
  template: {
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

  delete(payload: IDeleteTemplatePayload) {
    return API.delete<IDeleteResponse>(`/template/${payload.templateId}`);
  },
};
