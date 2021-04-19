import styled from "styled-components";

export const LoadingContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100vh;
  cursor: wait;

  .loader {
    position: relative;
    width: 40px;
    height: 40px;
  }

  .loader::before,
  .loader::after {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    opacity: 0.6;
    border-radius: 50%;
    background-color: ${({ theme }) => theme.colors.blue};
    animation: sk-bounce 2s infinite ease-in-out;
  }

  .loader::after {
    animation-delay: -1s;
  }

  @keyframes sk-bounce {
    0%,
    100% {
      transform: scale(0);
      -webkit-transform: scale(0);
    }

    50% {
      transform: scale(1);
      -webkit-transform: scale(1);
    }
  }
`;
