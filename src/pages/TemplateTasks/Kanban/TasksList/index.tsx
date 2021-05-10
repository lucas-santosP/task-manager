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

type IDragEvent = React.DragEvent<HTMLUListElement | HTMLLIElement>;

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

  function pickupTask(e: IDragEvent, taskId: string) {
    e.dataTransfer.effectAllowed = "move";
    e.dataTransfer.dropEffect = "move";
    e.dataTransfer.setData("task-id", taskId);
  }

  async function moveTask(e: IDragEvent, taskIdTo?: string) {
    try {
      e.stopPropagation();
      const taskIdFrom = e.dataTransfer.getData("task-id");
      const taskFrom = templateStore.currentTemplate?.tasks.find((task) => task._id === taskIdFrom);
      const templateId = templateStore.currentTemplate?._id;

      if (templateId && taskFrom) {
        if (taskFrom.status === status && taskIdTo) {
          await templateStore.updateTasksIndexes({ templateId, taskIdFrom, taskIdTo }); //move in the same column
        } else if (taskFrom.status !== status) {
          await templateStore.updateTasksColumn({ templateId, status, taskId: taskIdFrom }); //move to a different column
        }
      }
    } catch (error) {
      alert(error?.response?.data || error?.message);
    }
  }

  return (
    <ContainerList
      onDrop={moveTask}
      onDragOver={(e) => e.preventDefault()}
      onDragEnter={(e) => e.preventDefault()}
    >
      {tasks.map((task) => (
        <TaskItem
          onDrop={(e) => moveTask(e, task._id)}
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
