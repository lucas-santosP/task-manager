import styled from "styled-components";
import { shade } from "polished";
import { flexCenter } from "../../../../styles/shared";

export const ContainerKanbanColumn = styled.div<{ color: string }>`
  display: flex;
  align-items: flex-start;
  flex-direction: column;
  width: 100%;
  height: 100%;
  padding: 0.5rem 1rem;
  background-color: ${({ color }) => color};
  border-radius: 0.5rem;
`;

export const Header = styled.header`
  ${flexCenter}
  width: 100%;
  height: 3.5rem;
`;

export const HeaderTitle = styled.h3`
  flex: 1;
  width: 100%;
  font-size: 1.3rem;
`;

export const Badge = styled.div<{ color: string }>`
  ${flexCenter}
  width: 2.5rem;
  height: 1.8rem;
  font-size: 0.9rem;
  background-color: ${({ color }) => shade(0.08, color)};
  border-radius: 9999px;
`;

export const TasksList = styled.ul`
  flex: 1;
  display: flex;
  align-items: flex-start;
  flex-direction: column;
  gap: 1rem;
  width: 100%;
`;
