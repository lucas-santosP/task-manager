import styled from "styled-components";

export const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  font-size: ${({ theme }) => theme.fontSize.sm};

  > .button {
    margin: 1rem auto 0 auto;
    font-weight: bold;
    padding-left: 4rem;
    padding-right: 4rem;
  }

  > .bottom-text {
    width: 100%;
    text-align: center;
  }
`;
