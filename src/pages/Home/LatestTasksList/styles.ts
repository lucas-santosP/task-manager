import { breakPoints } from "./../../../styles/shared";
import styled, { css } from "styled-components";

const mutedGray = "#a7a7a7";

export const StyledList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  min-height: 56px;
  border-radius: 0.5rem;
  overflow: hidden;
  box-shadow: 0 0 2px 0 #333;

  > li {
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    transition: all ease 0.3s;
    cursor: pointer;
    flex: 1;
    padding: 1rem 1.5rem;
    padding-bottom: 1rem;
    text-align: center;
    color: #333;
    background-color: #fff;
    box-shadow: 0 0 2px 0 #333;

    ${({ theme }) =>
      theme.title === "dark" &&
      css`
        background-color: ${theme.colors.gray};
        box-shadow: 0 0 2px 0px #000;
      `}

    &:hover {
      border-color: #333;
      background-color: ${({ theme }) => (theme.title === "dark" ? "#333" : "#f2f2f2")};
    }

    @media (max-width: ${breakPoints.xs}) {
      min-width: 150px;
    }
  }

  .name {
    color: ${({ theme }) => theme.title === "dark" && "#fff"};
    display: block;
    font-size: 1rem;
    margin-bottom: 0.3rem;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;

    @media (max-width: ${breakPoints.xs}) {
      white-space: normal;
    }
  }

  .last-update {
    color: ${mutedGray};
    white-space: nowrap;
    @media (max-width: ${breakPoints.xs}) {
      white-space: normal;
    }
  }
`;
