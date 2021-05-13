import styled from "styled-components";
import { shade } from "polished";
import { baseTransition } from "../../../../styles/mixins";
import DropZone from "../../../../components/dragAndDrop/DropZone";

export const ContainerTaskItem = styled(DropZone)`
  width: 100%;
  display: flex;
  color: ${({ theme }) => theme.colors.text};
  background-color: ${({ theme }) => (theme.title === "light" ? "#fff" : theme.colors.gray)};
  border-radius: 4px;
  box-shadow: 0 0 2px 0px #333;
`;

export const BodyTaskItem = styled.li`
  ${baseTransition}
  display: flex;
  align-items: flex-start;
  width: 100%;
  padding: 0.7rem 0.5rem;
  padding-left: 0.25rem;

  .popover {
    ${baseTransition}
    margin-left: 0.3rem;
    font-size: 1.3rem;
    border-radius: 4px;
    padding: 0.25rem;

    &:hover {
      cursor: pointer;
      background-color: ${({ theme }) =>
        theme.title === "light" ? shade(0.1, "#fff") : shade(0.4, theme.colors.gray)};
    }
  }
`;

export const Text = styled.span`
  flex: 1;
  font-size: 1.1rem;
  line-height: 1.3;
  word-break: break-word;
  margin: auto 0;
`;
