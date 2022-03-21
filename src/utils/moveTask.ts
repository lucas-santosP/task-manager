import store from "../store";
import { ITaskStatus } from "../types/task";

interface IPayload {
  taskIdFrom: string;
  taskIdTo?: string;
  status: ITaskStatus;
}

export default async function moveTask(payload: IPayload) {
  const { taskIdTo, status, taskIdFrom } = payload;
  const taskFrom = store.templateStore.currentTemplate?.tasks.find(
    (task) => task._id === taskIdFrom
  );
  const templateId = store.templateStore.currentTemplate?._id;

  if (!templateId) throw new Error("Invalid current template");
  if (!taskFrom) throw new Error("Invalid task id received");

  if (taskIdTo && taskFrom.status === status) {
    await store.templateStore.updateTasksIndexes({ templateId, taskIdFrom, taskIdTo }); //move in the same column
  } else if (status) {
    await store.templateStore.updateTasksColumn({ templateId, status, taskId: taskIdFrom }); //move to a different column
  }
}
