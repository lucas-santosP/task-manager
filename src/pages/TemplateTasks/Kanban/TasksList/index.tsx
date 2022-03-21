import React from "react";
import store from "../../../../store";
import { ContainerList } from "./styles";
import { ITask, ITaskStatus } from "../../../../types/task";
import { moveTask } from "../../../../utils";
import TaskItem from "../TaskItem";
import { getApiErrorMessage } from "../../../../utils/getApiErrorMessage";
import { toast } from "react-toastify";

interface IProps {
  tasks: ITask[];
  status: ITaskStatus;
  color: string;
  openModalEdit: (task: ITask) => void;
}

const TasksList: React.FC<IProps> = (props) => {
  const { tasks, openModalEdit, status, ...rest } = props;

  async function handleDeleteTask(task: ITask) {
    try {
      await store.templateStore.deleteTask({ taskId: task._id });
    } catch (error) {
      const errorMsg = getApiErrorMessage(error);
      toast.error(errorMsg);
    }
  }

  async function handleOnDrop(taskIdFrom: string, taskIdTo: string) {
    try {
      await moveTask({ taskIdFrom, taskIdTo, status });
    } catch (error) {
      const errorMsg = getApiErrorMessage(error);
      toast.error(errorMsg);
    }
  }

  return (
    <ContainerList {...rest}>
      {tasks.map((task) => (
        <TaskItem
          key={task._id}
          task={task}
          onDrop={handleOnDrop}
          onClickEdit={openModalEdit}
          onClickDelete={handleDeleteTask}
        />
      ))}
    </ContainerList>
  );
};

export default TasksList;
