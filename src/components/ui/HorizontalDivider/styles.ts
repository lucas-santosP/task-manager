import styled from "styled-components";
import { baseTransition } from "../../../styles/mixins";

interface IProps {
  width?: string;
  maxWidth?: string;
  marginY?: string;
}

export const DividerContainer = styled.div<IProps>`
  width: 100%;
  height: 20px;
  margin: ${({ marginY }) => (marginY ? marginY : "1rem")} 0;

  .content {
    ${baseTransition}
    height: 100%;
    width: ${({ width }) => (width ? width : "100%")};
    max-width: ${({ maxWidth }) => (maxWidth ? maxWidth : "none")};
    position: relative;
    overflow: hidden;
    margin: 0 auto;
  }

  .content > .square {
    position: relative;
    top: 50%;
    transform: translateY(-50%);
    z-index: 5;
    width: 13px;
    height: 13px;
    background-color: ${({ theme }) => theme.colors.highlight};
    margin: auto auto;
  }

  .content > .line {
    ${baseTransition}
    position: absolute;
    top: 50%;
    transform: translate(-50%, -50%);
    width: 100%;
    height: 1px;
    background-color: ${({ theme }) => theme.colors.text};

    &.left {
      left: -20px;
    }
    &.right {
      transform: translate(50%, -50%);
      left: 20px;
    }
  }
`;
