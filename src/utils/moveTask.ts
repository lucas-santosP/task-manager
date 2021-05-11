import store from "../store";
import { ITaskStatus } from "../types/task";

interface IPayload {
  taskIdFrom: string;
  taskIdTo?: string;
  status: ITaskStatus;
}

export default async function moveTask(payload: IPayload) {
  const { templateStore } = store;
  const { taskIdTo, status, taskIdFrom } = payload;
  const taskFrom = templateStore.currentTemplate?.tasks.find((task) => task._id === taskIdFrom);
  const templateId = templateStore.currentTemplate?._id;

  if (!templateId) throw new Error("Invalid current template");
  if (!taskFrom) throw new Error("Invalid task id received");

  if (taskIdTo && taskFrom.status === status) {
    await templateStore.updateTasksIndexes({ templateId, taskIdFrom, taskIdTo }); //move in the same column
  } else if (status) {
    await templateStore.updateTasksColumn({ templateId, status, taskId: taskIdFrom }); //move to a different column
  }
}
