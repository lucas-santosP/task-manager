import React from "react";
import { ContainerList, TaskItem, Text } from "./styles";
import store from "../../../../store";
import { Popover } from "../../../../components/ui";
import { HiDotsHorizontal } from "react-icons/hi";
import { ITask, ITaskStatus } from "../../../../types/task";

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

  function pickupTask(e: React.DragEvent<HTMLLIElement>, taskId: string) {
    e.dataTransfer.effectAllowed = "move";
    e.dataTransfer.dropEffect = "move";
    e.dataTransfer.setData("task-id", taskId);
  }

  function moveTaskColumn(e: React.DragEvent<HTMLUListElement>) {
    e.stopPropagation();
    try {
      const taskId = e.dataTransfer.getData("task-id");
      const taskToMove = templateStore.currentTemplate?.tasks.find((task) => task._id === taskId);

      if (taskToMove && taskToMove.status !== status) {
        taskToMove.status = status;
        templateStore.updateTask(taskToMove);
      }
    } catch (error) {
      alert(error?.response?.data || error?.message);
    }
  }

  function moveTaskIndex(e: React.DragEvent<HTMLLIElement>, taskIdTo: string) {
    e.stopPropagation();
    try {
      const taskIdFrom = e.dataTransfer.getData("task-id");
      const templateId = templateStore.currentTemplate?._id;
      if (taskIdTo !== taskIdFrom && templateId) {
        templateStore.updateTasksIndexes({ templateId, taskIdFrom, taskIdTo });
      }
    } catch (error) {
      alert(error?.response?.data || error?.message);
    }
  }

  return (
    <ContainerList
      onDrop={moveTaskColumn}
      onDragOver={(e) => e.preventDefault()}
      onDragEnter={(e) => e.preventDefault()}
    >
      {tasks.map((task) => (
        <TaskItem
          onDrop={(e) => moveTaskIndex(e, task._id)}
          onDragOver={(e) => e.preventDefault()}
          onDragEnter={(e) => e.preventDefault()}
          draggable
          onDragStart={(e) => pickupTask(e, task._id)}
          key={task._id}
          {...rest}
        >
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
