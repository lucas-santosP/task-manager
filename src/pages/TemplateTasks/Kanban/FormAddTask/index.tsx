import React, { useState } from "react";
import { StyledForm } from "./styles";
import { ICreateTaskPayload, ITaskStatus } from "../../../../types/task";
import { Button, TextArea } from "../../../../components/ui";
import { useTemplateContext } from "../../../../contexts/templates";

interface IProps extends React.HTMLAttributes<HTMLFormElement> {
  templateId: string;
  status: ITaskStatus;
  visibility: boolean;
  hideForm: () => void;
}

const FormCreateTask: React.FC<IProps> = (props) => {
  const { templateId, hideForm, status, visibility } = props;

  const { createTask } = useTemplateContext();
  const [newTask, setNewTask] = useState<ICreateTaskPayload>({ name: "", status, templateId });

  async function handleCreateTask() {
    if (!newTask.name) return;

    try {
      await createTask(newTask);
      setNewTask((prev) => ({ ...prev, name: "" }));
    } catch (error) {
      alert(error.message);
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
        <Button size="sm" rounded="low" variant="gray" onClick={hideForm}>
          Cancel
        </Button>
        <Button disabled={!newTask.name} type="submit" size="sm" rounded="low">
          Add
        </Button>
      </div>
    </StyledForm>
  );
};

export default FormCreateTask;
