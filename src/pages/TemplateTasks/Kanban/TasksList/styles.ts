import styled from "styled-components";
import { shade } from "polished";
import { IconWrapper } from "../../../../components/ui";

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
  background-color: ${({ color }) => shade(0.03, color)};
  box-shadow: 0 0 2px 0px ${({ color }) => shade(0.5, color)};

  .popover {
    margin-left: 0.3rem;
  }
`;

export const Text = styled.span`
  flex: 1;
  font-size: 1.1rem;
`;

export const DotsIcon = styled(IconWrapper)`
  font-size: 1.2rem;
`;
