import { keyframes } from "styled-components";

export const fadeInAnimation = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

export const rotateAnimation = keyframes`
  from {
    transform: rotate(0deg)
  }
  to {
    transform: rotate(360deg)
  }
`;

export const zoomInAnimation = keyframes` 
  from {
    transform: translate(-50%, -50%) scale(0.5);
  }
  to {
    transform: translate(-50%, -50%) scale(1);
  }
`;
