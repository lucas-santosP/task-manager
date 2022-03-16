import React, { useMemo } from "react";
import { ContainerTaskItem, BodyTaskItem, Text } from "./styles";
import { Popover } from "../../../../components/ui";
import { HiDotsHorizontal } from "react-icons/hi";
import { ITask } from "../../../../types/task";
import Draggable from "../../../../components/dragAndDrop/Draggable";
import { KEY_DATA_TRANSFER } from "../constants";

interface IProps {
  task: ITask;
  onDrop: (taskIdFrom: string, taskIdTo: string) => void;
  onClickEdit: (task: ITask) => void;
  onClickDelete: (task: ITask) => void;
}

const TaskItem: React.FC<IProps> = (props) => {
  const { task, onDrop, onClickEdit, onClickDelete, ...rest } = props;

  const taskElementId = useMemo(() => `task-item-${task._id}`, [task._id]);

  return (
    <ContainerTaskItem
      id={taskElementId}
      keyDataTransfer={KEY_DATA_TRANSFER}
      onDrop={(taskIdFrom) => onDrop(taskIdFrom, task._id)}
      {...rest}
    >
      <Draggable
        dataTransfer={{ key: KEY_DATA_TRANSFER, data: task._id }}
        elementId={taskElementId}
      />

      <BodyTaskItem>
        <Text>{task.name}</Text>

        <Popover
          className="popover"
          position="left"
          content={<HiDotsHorizontal />}
          options={[
            {
              content: "Edit",
              onClick: () => onClickEdit(task),
            },
            {
              content: "Delete",
              onClick: () => onClickDelete(task),
            },
          ]}
        />
      </BodyTaskItem>
    </ContainerTaskItem>
  );
};

export default TaskItem;
