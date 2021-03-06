import styled from "styled-components";
import { fadeInAnimation } from "./animations";

export const breakPoints = {
  xs: "576px",
  sm: "768px",
  md: "1024px",
  lg: "1330px",
};

export const PageContainer = styled.div`
  width: 100%;
  height: 100%;
  animation: ${fadeInAnimation} 0.8s ease;
  display: flex;
  flex-direction: column;
  padding: 0 1rem;
  overflow-y: auto;
  overflow-x: hidden;
  min-width: 250px;
  max-width: 1600px;
`;

export const CardWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const PageTitle = styled.h1<{ align?: "center" | "start" }>`
  font-size: 2.1rem;
  font-family: ${({ theme }) => theme.fontFamily.secondary};
  margin-top: 0.5rem;
  margin-bottom: 1rem;
  text-align: ${({ align }) => align || "start"};
`;

export const PageSubtitle = styled.p`
  font-size: 1rem;
  font-family: ${({ theme }) => theme.fontFamily.secondary};
  padding-bottom: 0.5rem;
  width: 100%;
`;
