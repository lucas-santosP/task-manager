import React, { useState } from "react";
import { StyledForm } from "./styles";
import store from "../../../../store";
import { ICreateTaskPayload, ITaskStatus } from "../../../../types/task";
import { Button, TextArea } from "../../../../components/ui";
import { observer } from "mobx-react";
import { getApiErrorMessage } from "../../../../utils/getApiErrorMessage";
import { toast } from "react-toastify";

interface IProps extends React.HTMLAttributes<HTMLFormElement> {
  status: ITaskStatus;
  visibility: boolean;
  hideForm: () => void;
}

const FormCreateTask: React.FC<IProps> = (props) => {
  const { hideForm, status, visibility } = props;

  const [newTask, setNewTask] = useState<ICreateTaskPayload>(makeEmptyNewTask());
  const [isLoading, setIsLoading] = useState(false);

  function makeEmptyNewTask() {
    if (!store.templateStore.currentTemplate) {
      return { name: "", status, templateId: "" };
    }
    return {
      name: "",
      status,
      templateId: store.templateStore.currentTemplate._id,
    };
  }

  async function handleCreateTask() {
    if (!newTask.templateId) return;

    try {
      setIsLoading(true);
      await store.templateStore.createTask(newTask);
      setNewTask((prev) => ({ ...prev, name: "" }));
    } catch (error) {
      const errorMsg = getApiErrorMessage(error);
      toast.error(errorMsg);
    } finally {
      setTimeout(() => {
        setIsLoading(false);
      }, 500);
    }
  }

  return (
    <StyledForm onSubmit={handleCreateTask} style={{ display: visibility ? "unset" : "none" }}>
      <TextArea
        rows={2}
        marginBottom={0.5}
        placeholder="Enter a task"
        autoResizeY
        focused
        onChange={(e) => setNewTask((prev) => ({ ...prev, name: e.target.value }))}
        value={newTask.name}
      />

      <div className="btn-group">
        <Button variant="gray" onClick={hideForm}>
          Cancel
        </Button>
        <Button isLoading={isLoading} type="submit" disabled={!newTask.name}>
          Add
        </Button>
      </div>
    </StyledForm>
  );
};

export default observer(FormCreateTask);
