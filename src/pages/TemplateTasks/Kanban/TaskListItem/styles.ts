import styled from "styled-components";
import { shade } from "polished";
import { IconWrapper } from "../../../../components/ui";

export const ContainerTaskItem = styled.li<{ color: string }>`
  display: flex;
  align-items: flex-start;
  width: 100%;
  padding: 0.5rem 1rem;
  background-color: ${({ color }) => shade(0.03, color)};
  box-shadow: 0 0 2px 0px ${({ color }) => shade(0.5, color)};
`;

export const Text = styled.span`
  flex: 1;
  font-size: 1.1rem;
`;

export const DotsIcon = styled(IconWrapper)`
  font-size: 1.2rem;
  margin-left: 0.3rem;
`;
