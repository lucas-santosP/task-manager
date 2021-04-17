import React from "react";
import { ContainerTaskItem, StyledDotsIcon, Text } from "./styles";
import { Popover } from "../../../../components/ui";
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
        position="left"
        content={<StyledDotsIcon hoverBgColor={rest.color} />}
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
