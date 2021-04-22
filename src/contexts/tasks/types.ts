import {
  ICreateTaskPayload,
  IDeleteTaskPayload,
  ITask,
  IUpdateTaskPayload,
} from "../../types/task";

export interface ITaskContext {
  createTask: (payload: ICreateTaskPayload) => Promise<void>;
  updateTask: (payload: IUpdateTaskPayload) => Promise<void>;
  deleteTask: (payload: IDeleteTaskPayload) => Promise<void>;
  latestTasks: ITask[];
}
