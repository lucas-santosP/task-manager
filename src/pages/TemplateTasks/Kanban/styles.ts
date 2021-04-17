import styled from "styled-components";
import { breakPoints } from "../../../styles/shared";

export const ContainerKanban = styled.div`
  flex: 1;
  display: flex;
  gap: 1rem;
  width: 100%;
  padding-bottom: 1rem;
  color: #333;

  > * {
    flex: 1;
  }

  @media (max-width: ${breakPoints.sm}) {
    flex-direction: column;
  }

  @media (min-width: ${breakPoints.md}) {
    gap: 2rem;
  }
`;
