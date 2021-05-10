import styled from "styled-components";
import { shade } from "polished";
import { baseTransition } from "../../../../styles/mixins";

export const ContainerList = styled.ul`
  flex: 1;
  display: flex;
  align-items: flex-start;
  flex-direction: column;
  gap: 1rem;
  width: 100%;
`;

export const TaskItem = styled.li<{ color: string }>`
  display: flex;
  align-items: flex-start;
  width: 100%;
  padding: 0.5rem 1rem;
  color: ${({ theme }) => theme.colors.text};
  background-color: ${({ theme }) => (theme.title === "light" ? "#fff" : theme.colors.gray)};
  border-radius: 4px;
  box-shadow: 0 0 2px 0px #333;
  cursor: grab;

  .popover {
    ${baseTransition}
    margin-left: 0.3rem;
    font-size: 1.2rem;
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
  word-break: break-word;
  margin: auto 0;
`;
