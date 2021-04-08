import styled, { css } from "styled-components";

export const StyledList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 1.5rem;
  min-height: 56px;

  > li {
    width: 18rem;
    border-radius: 0.7rem;
    padding: 0.5rem 1.5rem;
    text-align: center;
    background-color: #fff;
    box-shadow: 0 0 2px 0px #333;

    ${({ theme }) =>
      theme.title === "dark" &&
      css`
        background-color: ${theme.colors.gray};
        box-shadow: 0 0 2px 0px #000;
      `}

    .name {
      display: block;
      font-size: 1rem;
      margin-bottom: 0.3rem;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
    }

    .last-update {
      display: block;
      color: #a7a7a7;
    }
  }
`;
