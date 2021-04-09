import React from "react";
import { StyledList } from "./styles";
import { normalizeDateString } from "../../../utils";
import { useTemplateContext } from "../../../contexts/templates";
import useLocation from "wouter/use-location";

const TemplateList: React.FC = () => {
  const { templates } = useTemplateContext();
  const [, setLocation] = useLocation();

  return (
    <StyledList>
      {!templates.length && <span>No Templates found.</span>}

      {templates.map((template) => (
        <li key={template._id} onClick={() => setLocation(`template/${template._id}`)}>
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
  );
};

export default TemplateList;
