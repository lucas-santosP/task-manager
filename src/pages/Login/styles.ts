import styled from "styled-components";
import { Link } from "wouter";
import { breakPoints } from "../../styles/shared";

export const Title = styled.h1`
  font-size: ${({ theme }) => theme.fontSize.lg};
  font-family: ${({ theme }) => theme.fontFamily.secondary};
  margin: 1rem auto 2rem auto;

  @media (max-width: ${breakPoints.xl}) {
    font-size: 2rem;
  }
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

export const StyledLink = styled(Link)`
  color: ${({ theme }) => theme.colors.textHighlight};
`;

export const CardDivider = styled.img`
  width: 75%;
  max-width: 325px;
  margin: 1.5rem auto;

  @media (max-width: ${breakPoints.xl}) {
    width: 100%;
  }
`;
