import styled, { css } from "styled-components";

export const StyledAlert = styled.p`
  --border-clr: rgba(95, 95, 95, 0.45);
  font-size: 1rem;
  background-color: #f4f4f4;
  border-radius: 4px;
  padding: 0.75rem;
  margin-bottom: 1rem;
  border: 1px solid var(--border-clr);
  box-shadow: 0 3px 2px 1px var(--border-clr);
  line-height: 1.3;
  max-width: max-content;

  ${({ theme }) =>
    theme.title === "dark" &&
    css`
      --border-clr: #929292;
      background-color: #575757;
    `};
`;
