import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  margin-bottom: 1rem;

  label {
    margin-bottom: ${({ theme }) => theme.spacing.xs};
  }
`;
