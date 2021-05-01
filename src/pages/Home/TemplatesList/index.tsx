import React from "react";
import { StyledList } from "./styles";
import { normalizeDateString } from "../../../utils";
import { observer } from "mobx-react";
import store from "../../../store";
import useLocation from "wouter/use-location";

const TemplateList: React.FC = () => {
  const [, setLocation] = useLocation();

  return (
    <StyledList>
      {!store.templateStore.templates.length && <span>No Templates found.</span>}

      {store.templateStore.templates.map((template) => (
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

export default observer(TemplateList);
