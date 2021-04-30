import React, { createContext, useContext, useMemo } from "react";
import { ITask } from "../../types/task";
import { ITemplate } from "../../types/template";

interface IKanbanContext {
  currentTemplate: ITemplate;
  tasksTodo: ITask[];
  tasksDoing: ITask[];
  tasksDone: ITask[];
}

interface IProps {
  currentTemplate: ITemplate;
}

const TaskContext = createContext({} as IKanbanContext);

export const KanbanContextProvider: React.FC<IProps> = (props) => {
  const { currentTemplate, children } = props;

  const tasksSegregated = useMemo(() => {
    return {
      tasksTodo: currentTemplate.tasks.filter((task) => task.status === "to do"),
      tasksDoing: currentTemplate.tasks.filter((task) => task.status === "doing"),
      tasksDone: currentTemplate.tasks.filter((task) => task.status === "done"),
    };
  }, [currentTemplate]);

  return (
    <TaskContext.Provider value={{ currentTemplate, ...tasksSegregated }}>
      {children}
    </TaskContext.Provider>
  );
};

export function useKanbanContext(): IKanbanContext {
  const context = useContext(TaskContext);
  return { ...context };
}
