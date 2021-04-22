import React, { HTMLAttributes, ReactNode, useMemo } from "react";
import { Divider, PopoverContainer, PopoverList } from "./styles";
import { v4 as uuidv4 } from "uuid";

interface IOptions {
  content: ReactNode;
  onClick: () => unknown;
}

export type IPosition = "center" | "right" | "left";

interface IProps extends HTMLAttributes<HTMLDivElement> {
  options: IOptions[];
  content: ReactNode;
  position?: IPosition;
}

const Popover: React.FC<IProps> = (props) => {
  const { options, position = "center", content, ...rest } = props;

  const uniqueKeys = useMemo(() => options.map(() => uuidv4()), [options]);

  function handleClick(callback: () => unknown) {
    if (document.activeElement instanceof HTMLElement) document.activeElement.blur();
    callback();
  }

  return (
    <PopoverContainer tabIndex={1} {...rest}>
      {content}

      <PopoverList position={position} title="">
        {options.map((option, index) => (
          <>
            <li
              key={uniqueKeys[index]}
              title={typeof option.content === "string" ? option.content : ""}
              onClick={() => handleClick(option.onClick)}
            >
              {option.content}
            </li>

            {index !== options.length - 1 && <Divider />}
          </>
        ))}
      </PopoverList>
    </PopoverContainer>
  );
};

export default Popover;
