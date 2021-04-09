import React, { useEffect, useState } from "react";
import { useTemplateContext } from "../../contexts/templates";
import { PageContainer, PageTitle } from "../../styles/shared";
import { ITemplate } from "../../types/template";

interface IProps {
  templateId: string;
}

const TemplateTasks: React.FC<IProps> = (props) => {
  const { templateId } = props;
  const { templates } = useTemplateContext();
  const [template, setTemplate] = useState<ITemplate | null>(null);

  useEffect(() => {
    setTemplate(templates.find((template) => template._id === templateId) || null);
  }, []);

  if (!template) return <span>Template not found</span>;

  return (
    <PageContainer>
      <PageTitle>{template.name}</PageTitle>
      <p style={{ marginBottom: "2rem" }}>Description: {template.description}</p>

      <ul>
        <h3>Tasks:</h3>
        {template.tasks.map((task) => (
          <li key={task._id}>{task.name}</li>
        ))}
      </ul>
    </PageContainer>
  );
};

export default TemplateTasks;
