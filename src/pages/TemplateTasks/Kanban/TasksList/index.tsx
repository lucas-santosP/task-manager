import React from "react";
import { ContainerList, TaskItem, Text } from "./styles";
import store from "../../../../store";
import { Popover } from "../../../../components/ui";
import { HiDotsHorizontal } from "react-icons/hi";
import { ITask, ITaskStatus } from "../../../../types/task";
import { moveTask } from "../../../../utils";
import Draggable from "../../../../components/dragAndDrop/Draggable";

interface IProps {
  tasks: ITask[];
  status: ITaskStatus;
  color: string;
  openModalEdit: (task: ITask) => void;
}

const TasksList: React.FC<IProps> = (props) => {
  const { tasks, openModalEdit, status, ...rest } = props;
  const { templateStore } = store;

  async function handleDeleteTask(taskId: string) {
    try {
      await templateStore.deleteTask({ taskId });
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
    <ContainerList>
      {tasks.map((task) => (
        <TaskItem
          key={task._id}
          id={`task-item-${task._id}`}
          keyDataTransfer="task-id"
          onDrop={(taskIdFrom) => handleOnDrop(taskIdFrom, task._id)}
          {...rest}
        >
          <Draggable
            dataTransfer={{ key: "task-id", data: task._id }}
            elementId={`task-item-${task._id}`}
          />
          <Text> {task.name}</Text>
          <Popover
            className="popover"
            position="left"
            content={<HiDotsHorizontal />}
            options={[
              {
                content: "Edit",
                onClick: () => openModalEdit(task),
              },
              {
                content: "Delete",
                onClick: () => handleDeleteTask(task._id),
              },
            ]}
          />
        </TaskItem>
      ))}
    </ContainerList>
  );
};

export default TasksList;
