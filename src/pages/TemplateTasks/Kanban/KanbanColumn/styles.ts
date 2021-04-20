import styled, { css } from "styled-components";
import { shade } from "polished";
import { flexCenter } from "../../../../styles/mixins";
import { IconWrapper } from "../../../../components/ui";

export const ContainerKanbanColumn = styled.div<{ color: string }>`
  display: flex;
  align-items: flex-start;
  flex-direction: column;
  width: 100%;
  padding: 0.5rem 1rem;
  padding-bottom: 1.5rem;
  background-color: ${({ color }) => color};
  border-radius: 0.5rem;

  ${({ theme }) =>
    theme.title === "dark" &&
    css`
      background-color: #2a2a2a;
      box-shadow: 0 0 3px 0 #fff;
    `}
`;

export const Header = styled.header`
  ${flexCenter}
  width: 100%;
  margin-bottom: 1rem;
  ${({ theme }) =>
    theme.title === "dark" &&
    css`
      color: #fff;
    `}
`;

export const HeaderTitle = styled.h2`
  flex: 1;
  font-size: 1.4rem;
`;

export const AddIcon = styled(IconWrapper)`
  height: 2rem;
  font-size: 1.7rem;
  margin: 0 0.5rem;
`;

export const Badge = styled.div<{ color: string }>`
  ${flexCenter}
  width: 2.5rem;
  height: 2rem;
  font-size: 0.9rem;
  color: #333;
  font-family: ${({ theme }) => theme.fontFamily.mono};
  background-color: ${({ color }) => shade(0.08, color)};
  border-radius: 9999px;
`;
