import styled from "styled-components";

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
  gap: 1rem;

  @media (max-width: 800px) {
    grid-template-columns: 1fr;
    gap: 0;
  }
`;
