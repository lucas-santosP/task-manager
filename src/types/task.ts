export type ITaskStatus = "to do" | "doing" | "done";

export interface ITask {
  _id: string;
  name: string;
  createdAt: string;
  updatedAt: string;
  status: ITaskStatus;
  __v?: number;
}

export interface ICreateTaskPayload {
  templateId: string;
  name: string;
  status: ITaskStatus;
}

export interface IUpdateTaskPayload {
  _id: string;
  name: string;
  status: ITaskStatus;
}

export interface IUpdateTasksIndexesPayload {
  templateId: string;
  taskIdFrom: string;
  taskIdTo: string;
}

export interface IDeleteTaskPayload {
  taskId: string;
}
