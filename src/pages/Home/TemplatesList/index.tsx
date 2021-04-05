import React from "react";
import { Section, ListTitle, StyledList } from "./styles";
import { ITemplate } from "../../../types/template";

interface IProps {
  templates: ITemplate[];
}

const TemplateList: React.FC<IProps> = (props) => {
  const { templates } = props;

  function normalizeDateString(dateString: string) {
    const date = new Date(dateString);
    const day = date.getDate();
    const month = date.getMonth() + 1;
    const year = date.getFullYear();

    return `${month}/${day}/${year}`;
  }

  return (
    <Section>
      <ListTitle>Your Templates</ListTitle>

      <StyledList>
        {templates.map((template) => (
          <li key={template._id}>
            <span className="name" title={template.name}>
              {template.name}
            </span>

            <p className="description" title={template.description}>
              {template.description}
            </p>

            <small className="last-update">
              Last update: {normalizeDateString(template.updatedAt)}
            </small>
          </li>
        ))}
      </StyledList>
    </Section>
  );
};

export default TemplateList;
