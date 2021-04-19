import React from "react";
import { ContainerTaskItem, DotsIcon, Text } from "./styles";
import { Popover } from "../../../../components/ui";
import { HiDotsHorizontal } from "react-icons/hi";
import { ITask } from "../../../../types/task";

interface IProps {
  task: ITask;
  color: string;
}

const TaskListItem: React.FC<IProps> = (props) => {
  const { task, ...rest } = props;

  return (
    <ContainerTaskItem {...rest}>
      <Text>{task.name}</Text>

      <Popover
        className="popover"
        position="left"
        content={<DotsIcon icon={<HiDotsHorizontal />} hoverBgColor={rest.color} />}
        options={[
          {
            content: "Edit",
            onClick: () => console.log("Edit"),
          },
          {
            content: "Delete",
            onClick: () => console.log("Delete"),
          },
        ]}
      />
    </ContainerTaskItem>
  );
};

export default TaskListItem;
