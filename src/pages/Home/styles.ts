import styled from "styled-components";
import { breakPoints } from "../../styles/shared";

export const Section = styled.section`
  width: 100%;
  padding: 1rem 0;
  margin-bottom: 1rem;

  &:last-of-type {
    margin-bottom: 2rem;
  }
`;

export const SectionTitle = styled.h3<{ align?: "center" | "left" }>`
  font-size: 1.7rem;
  margin-bottom: 0.75rem;
  text-align: ${({ align }) => align};
`;

export const GridSections = styled.div`
  display: grid;
  width: 100%;
  grid-template-columns: 2fr 1fr;

  @media (max-width: ${breakPoints.sm}) {
    grid-template-columns: 1fr;
  }
`;
