import React from "react";
import store from "../store";
import { ITaskStatus } from "../types/task";

type IDragEvent<T> = React.DragEvent<T>;

interface IPayload {
  taskIdTo?: string;
  status: ITaskStatus;
}

export default async function moveTask<T>(e: IDragEvent<T>, payload: IPayload) {
  e.stopPropagation();
  const { templateStore } = store;
  const { taskIdTo, status } = payload;
  const taskIdFrom = e.dataTransfer.getData("task-id");
  const taskFrom = templateStore.currentTemplate?.tasks.find((task) => task._id === taskIdFrom);
  const templateId = templateStore.currentTemplate?._id;

  if (!templateId) throw new Error("Invalid current template");
  if (!taskFrom) throw new Error("Invalid task id received");

  if (taskIdTo && taskFrom.status === status) {
    await templateStore.updateTasksIndexes({ templateId, taskIdFrom, taskIdTo }); //move in the same column
  } else if (status && taskFrom.status !== status) {
    await templateStore.updateTasksColumn({ templateId, status, taskId: taskIdFrom }); //move to a different column
  }
}
