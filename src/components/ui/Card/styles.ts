import styled from "styled-components";

export const CardContainer = styled.div`
  display: flex;
  flex-direction: column;
  color: ${({ theme }) => theme.colors.text};
  border-radius: 0.5rem;
  padding: 2rem;
  margin-top: 0.7rem;
  width: 100%;
  max-width: 500px;
  box-shadow: 0 0 5px 2px rgba(0, 0, 0, 0.205);
  background-color: ${({ theme }) => (theme.title === "light" ? " #fff" : theme.colors.primary)};

  main {
    flex: 1;
    display: flex;
    flex-direction: column;
  }
`;

export const CardHeader = styled.header`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 1.5rem;

  h2 {
    font-size: ${({ theme }) => theme.fontSize.md};
    font-family: ${({ theme }) => theme.fontFamily.secondary};
  }
`;
