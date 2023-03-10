import styled from "styled-components";

export const ZipCodeModalLayout = styled.div<{ scroll: number }>`
  width: 100vw;
  height: 100vh;
  position: absolute;
  left: 0;
  top: ${({ scroll }) => scroll}px;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 5;
  background-color: rgba(0, 0, 0, 0.3);
`;
