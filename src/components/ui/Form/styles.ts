import styled from "styled-components";

export const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  font-size: ${({ theme }) => theme.fontSize.sm};

  > .button {
    margin: 1rem auto 0 auto;
  }

  > .bottom-text {
    width: 100%;
    text-align: center;
  }
`;
