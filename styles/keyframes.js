import { keyframes } from "styled-components";

const horizontalBounce = keyframes`
  0%,
  100% {
    transform: translateX(0px);
  }
  50% {
    transform: translateX(10px);
  }
`;

export { horizontalBounce };
