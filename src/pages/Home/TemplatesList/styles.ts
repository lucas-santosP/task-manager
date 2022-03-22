import styled, { css } from "styled-components";
import { baseTransition } from "../../../styles/mixins";
import { HiOutlineTrash, HiAnnotation, HiPencilAlt, HiClock } from "react-icons/hi";
import { breakPoints } from "../../../styles/shared";

const mutedGray = "#a7a7a7";

export const TaskList = styled.ul`
  width: 100%;
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
    border-color: ${({ theme }) => (theme.title === "light" ? "#333" : "#dfdfdf")};
    /* transform: scale(1.025); */
  }

  @media (max-width: ${breakPoints.xs}) {
    width: 100%;
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
`;

// icons
export const DeleteIcon = styled(HiOutlineTrash)`
  ${baseTransition}
  cursor: pointer;
  color: ${mutedGray};

  &:hover {
    color: #ff8484;
  }
`;

export const EditIcon = styled(HiPencilAlt)`
  ${baseTransition}
  cursor: pointer;
  color: ${mutedGray};

  &:hover {
    color: #ff8484;
  }
`;

export const ClockIcon = styled(HiClock)`
  ${baseTransition}
`;

export const TasksIcon = styled(HiAnnotation)`
  ${baseTransition}
`;
