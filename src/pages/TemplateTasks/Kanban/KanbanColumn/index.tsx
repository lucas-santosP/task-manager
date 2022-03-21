import React, { useMemo, useRef, useState } from "react";
import { ContainerKanbanColumn, Header, HeaderTitle, AddIcon, Badge } from "./styles";
import { Form, Modal, ModalRef, TextArea } from "../../../../components/ui";
import store from "../../../../store";
import { HiOutlinePlus } from "react-icons/hi";
import { capitalizeText, moveTask } from "../../../../utils";
import { ITask, ITaskStatus, IUpdateTaskPayload } from "../../../../types/task";
import TasksList from "../TasksList";
import FormAddTask from "../FormAddTask";
import { KEY_DATA_TRANSFER } from "../constants";
import { getApiErrorMessage } from "../../../../utils/getApiErrorMessage";
import { toast } from "react-toastify";

type IVariant = "blue" | "green" | "red";

interface IProps {
  title?: string;
  variant?: IVariant;
  status: ITaskStatus;
  tasks: ITask[];
}

type IBaseColors = {
  [key in IVariant]: string;
};

const baseColors: IBaseColors = {
  red: "#fbc2bf",
  blue: "#bfe9e9",
  green: "#ddebd8",
};

const KanbanColumn: React.FC<IProps> = (props) => {
  const { title, status, variant = "blue", tasks, ...rest } = props;

  const [isCreating, setIsCreating] = useState(false);
  const taskFormInitialState: IUpdateTaskPayload = { _id: "", name: "", status };
  const [taskForm, setTaskForm] = useState(taskFormInitialState);

  const color = useMemo(() => baseColors[variant], [variant]);
  const refModalEdit = useRef<ModalRef>(null);

  function openModalEdit(task: ITask) {
    setTaskForm(task);
    refModalEdit.current?.setVisibility(true);
  }

  async function handleUpdateTask() {
    if (!taskForm._id) return;

    try {
      await store.templateStore.updateTask(taskForm);
      setTaskForm((prev) => ({ ...prev, name: "", _id: "" }));
      refModalEdit.current?.setVisibility(false);
    } catch (error) {
      const errorMsg = getApiErrorMessage(error);
      toast.error(errorMsg);
    }
  }

  async function handleOnDrop(dataTransferred: string) {
    try {
      await moveTask({ taskIdFrom: dataTransferred, status });
    } catch (error) {
      const errorMsg = getApiErrorMessage(error);
      toast.error(errorMsg);
    }
  }

  return (
    <ContainerKanbanColumn
      keyDataTransfer={KEY_DATA_TRANSFER}
      onDrop={handleOnDrop}
      color={color}
      {...rest}
    >
      <Header>
        <HeaderTitle>{title ? title : capitalizeText(status)}</HeaderTitle>

        <AddIcon
          icon={<HiOutlinePlus />}
          hoverBgColor={color}
          onClick={() => setIsCreating((prev) => !prev)}
        />
        <Badge color={color}>{tasks.length}</Badge>
      </Header>

      <FormAddTask visibility={isCreating} status={status} hideForm={() => setIsCreating(false)} />

      <TasksList tasks={tasks} status={status} color={color} openModalEdit={openModalEdit} />

      <Modal ref={refModalEdit} title="Edit Task">
        <Form onSubmit={handleUpdateTask} buttonText={"Update"} buttonIsDisable={!taskForm.name}>
          <TextArea
            label="Name"
            name="name"
            value={taskForm.name}
            onChange={(e) => setTaskForm((prev) => ({ ...prev, name: e.target.value }))}
          />
        </Form>
      </Modal>
    </ContainerKanbanColumn>
  );
};

export default KanbanColumn;
