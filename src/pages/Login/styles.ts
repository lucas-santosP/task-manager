import styled, { css } from "styled-components";
import { Link } from "wouter";

export const Title = styled.h1`
  font-size: ${({ theme }) => theme.fontSize.lg};
  font-family: ${({ theme }) => theme.fontFamily.secondary};
  margin: 1rem auto 2rem auto;
`;

export const CardWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const CardTitle = styled.h2`
  font-size: ${({ theme }) => theme.fontSize.md};
  font-family: ${({ theme }) => theme.fontFamily.secondary};
  margin: 0 auto 1.5rem auto;
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  font-size: ${({ theme }) => theme.fontSize.sm};

  > button {
    margin: 0rem auto;
    font-weight: bold;
    padding-left: 4rem;
    padding-right: 4rem;
  }

  > span {
    width: 100%;
    text-align: center;
  }
`;

export const Input = styled.input`
  border-radius: 0.2rem;
  font-size: ${({ theme }) => theme.fontSize.sm};
  box-shadow: 0 0 2px 2px rgba(51, 51, 51, 0.3);
  padding: 0.5rem 1rem;
  height: 2.5rem;
  margin-bottom: 1.5rem;
  color: ${({ theme }) => theme.colors.text};

  &::placeholder {
    color: #afafaf;
  }

  ${({ theme }) =>
    theme.title === "light"
      ? css`
          background-color: #fff;
        `
      : css`
          background-color: ${theme.colors.gray};
        `}
`;

export const StyledLink = styled(Link)`
  color: ${({ theme }) => theme.colors.textHighlight};
`;

export const InputLabel = styled.label`
  margin-bottom: 0.5rem;
`;

export const CardDivider = styled.img`
  width: 75%;
  margin: 1.5rem auto;
`;
