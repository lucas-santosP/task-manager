export interface ITask {
  _id: string;
  name: string;
  createdAt: string;
  updatedAt: string;
  status: "to do" | "doing" | "done";
  __v?: number;
}
