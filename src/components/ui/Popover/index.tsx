import React, { HTMLAttributes, ReactNode, useMemo } from "react";
import { PopoverContainer, PopoverList } from "./styles";
import { v4 as uuidv4 } from "uuid";

interface IOptions {
  content: ReactNode;
  onClick: () => unknown;
}

interface IProps extends HTMLAttributes<HTMLDivElement> {
  options: IOptions[];
  content: ReactNode;
}

const Popover: React.FC<IProps> = (props) => {
  const { options, content, ...rest } = props;

  const uniqueKeys = useMemo(() => options.map(() => uuidv4()), [options]);

  function handleClick(callback: () => unknown) {
    if (document.activeElement instanceof HTMLElement) document.activeElement.blur();
    callback();
  }

  return (
    <PopoverContainer tabIndex={1} {...rest}>
      {content}

      <PopoverList>
        {options.map((option, index) => (
          <li
            key={uniqueKeys[index]}
            title={typeof option.content === "string" ? option.content : ""}
            onClick={() => handleClick(option.onClick)}
          >
            {option.content}
          </li>
        ))}
      </PopoverList>
    </PopoverContainer>
  );
};

export default Popover;
