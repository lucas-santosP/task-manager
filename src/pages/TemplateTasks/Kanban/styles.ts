import styled from "styled-components";
import { breakPoints } from "../../../styles/shared";

export const ContainerKanban = styled.div`
  display: flex;
  gap: 1rem;
  width: 100%;
  height: 100%;
  margin-bottom: 1rem;
  color: #333;

  @media (max-width: ${breakPoints.sm}) {
    flex-direction: column;
  }

  @media (min-width: ${breakPoints.lg}) {
    gap: 2rem;
  }
`;
