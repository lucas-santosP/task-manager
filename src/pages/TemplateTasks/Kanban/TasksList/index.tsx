import React from "react";
import store from "../../../../store";
import { ContainerList } from "./styles";
import { ITask, ITaskStatus } from "../../../../types/task";
import { moveTask } from "../../../../utils";
import TaskItem from "../TaskItem";

interface IProps {
  tasks: ITask[];
  status: ITaskStatus;
  color: string;
  openModalEdit: (task: ITask) => void;
}

const TasksList: React.FC<IProps> = (props) => {
  const { tasks, openModalEdit, status, ...rest } = props;
  const { templateStore } = store;

  async function handleDeleteTask(task: ITask) {
    try {
      await templateStore.deleteTask({ taskId: task._id });
    } catch (error) {
      alert(error.message);
    }
  }

  async function handleOnDrop(taskIdFrom: string, taskIdTo: string) {
    try {
      await moveTask({ taskIdFrom, taskIdTo, status });
    } catch (error) {
      alert(error?.response?.data || error?.message);
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
