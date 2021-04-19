import { API } from "./api";
import { ITask, ICreateTaskPayload, IUpdateTaskPayload, IDeleteTaskPayload } from "../types/task";

interface IResponse {
  task: ITask;
}

interface IDeleteResponse {
  task: {
    n: number;
    ok: number;
    deletedCount: number;
  };
}

export const TaskServices = {
  create(payload: ICreateTaskPayload) {
    return API.post<IResponse>(`/task/${payload.templateId}`, payload);
  },

  update(payload: IUpdateTaskPayload) {
    return API.put<IResponse>(`/task/${payload._id}`, payload);
  },

  delete(payload: IDeleteTaskPayload) {
    return API.delete<IDeleteResponse>(`/template/${payload.taskId}`);
  },
};
