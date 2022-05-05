import styled from "styled-components";
import { breakPoints } from "../../styles/shared";

export const ContainerForm = styled.div`
  width: 100%;
  max-width: 700px;
  position: relative;
  z-index: 2;

  small {
    width: 100%;
    text-align: left;
    margin-bottom: 1rem;
    color: #757575;
    padding: 0 0.1rem;
  }
`;

export const RightBackgroundImage = styled.img`
  object-fit: cover;
  position: absolute;
  padding-bottom: 2rem;
  height: 100vh;
  top: 0;
  right: 0;

  @media (max-width: ${breakPoints.md}) {
    display: none;
  }
`;
