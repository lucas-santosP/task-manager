import styled, { css } from "styled-components";
import { baseTransition } from "../../../styles/mixins";
import { HiOutlineTrash, HiAnnotation, HiPencilAlt, HiClock } from "react-icons/hi";

const mutedGray = "#a7a7a7";

export const TaskList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 1.5rem;
`;

export const TaskItem = styled.li`
  ${baseTransition}
  width: 18rem;
  border-radius: 0.5rem;
  padding: 1rem 1rem 1.5rem 1rem;
  background-color: #fff;
  box-shadow: 0 1px 8px -5px #333;
  border: 1px solid ${({ theme }) => (theme.title === "light" ? "#dfdfdf" : "transparent")};
  cursor: pointer;

  ${({ theme }) =>
    theme.title === "dark" &&
    css`
      background-color: ${theme.colors.gray};
      box-shadow: 0 0 2px 0 #fff;
    `}

  &:hover {
    border-color: ${mutedGray};
  }
`;

export const HeaderTaskItem = styled.header`
  display: flex;
  flex-direction: column;
  margin-bottom: 0.75rem;
  font-size: 1.5rem;

  .row-icons {
    display: flex;
    justify-content: flex-end;
    gap: 0.75rem;
    margin-bottom: 0.5rem;
    font-size: 1.7rem;
    user-select: none;
  }

  .title {
    font-weight: bold;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }
`;

export const MainTaskItem = styled.main`
  display: flex;
  flex-direction: column;
  margin-bottom: 1rem;
  font-size: 1rem;

  .description {
    display: -webkit-box;
    width: 100%;
    height: 40px;
    overflow: hidden;
    text-overflow: ellipsis;
    word-break: break-all;
    line-height: 1.25;
    white-space: normal;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
  }
`;

export const FooterTaskItem = styled.main`
  display: flex;
  flex-direction: column;
  gap: 0.2rem;
  font-size: 1rem;
  color: ${mutedGray};

  span {
    display: flex;
    align-items: center;
    justify-content: flex-start;
    gap: 0.3rem;
  }

  svg {
    color: ${({ theme }) => theme.colors.text};
  }
`;

// icons
export const DeleteIcon = styled(HiOutlineTrash)`
  ${({ theme }) => css`
    ${baseTransition}
    cursor: pointer;
    color: ${theme.colors.red};

    @media (hover: none) and (pointer: coarse) {
      color: ${theme.colors.red}!important;
    }

    @media (hover: hover) {
      color: ${mutedGray};
      &:hover {
        color: ${theme.colors.red};
      }
    }
  `};
`;

export const EditIcon = styled(HiPencilAlt)`
  ${({ theme }) => css`
    ${baseTransition}
    cursor: pointer;
    color: ${theme.colors.green};

    @media (hover: hover) {
      color: ${mutedGray};
      &:hover {
        color: ${theme.colors.green};
      }
    }
  `};
`;

export const ClockIcon = styled(HiClock)`
  ${baseTransition}
`;

export const TasksIcon = styled(HiAnnotation)`
  ${baseTransition}
`;
