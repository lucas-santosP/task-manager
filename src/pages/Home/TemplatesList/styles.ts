import styled, { css } from "styled-components";
import { baseTransition } from "../../../styles/shared";

export const StyledList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 1.5rem;
  min-height: 110px;

  > li {
    ${baseTransition}
    width: 15rem;
    border-radius: 0.7rem;
    padding: 0.5rem 1.5rem;
    padding-bottom: 1rem;
    text-align: center;
    background-color: #ffff;
    box-shadow: 0 0 2px 0 #333;
    cursor: pointer;

    ${({ theme }) =>
      theme.title === "dark" &&
      css`
        background-color: ${theme.colors.gray};
        box-shadow: 0 0 2px 0 #fff;
      `}

    &:hover {
      transform: scale(1.03);
      box-shadow: 0 0 2px 1px;
    }

    .name {
      display: block;
      font-size: 1.3rem;
      font-weight: bold;
      margin-bottom: 0.3rem;
      padding-bottom: 0.2rem;
      border-bottom: 2px solid #a7a7a7;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
    }

    .description {
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
    }

    .last-update {
      display: block;
      margin-top: 0.5rem;
      padding-top: 0.5rem;
      color: #a7a7a7;
    }
  }
`;
