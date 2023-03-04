import styled from "styled-components";

export const InputBoxLayout = styled.label`
  display: inline-flex;
  align-items: center;
`;

export const InputBoxTitle = styled.h3`
  font-weight: 500;
  font-size: 16px;
  width: 100px;
`;

export const InputBoxInput = styled.input<{ width?: string }>`
  width: ${({ width }) => (width === undefined ? "150px" : width)};
  height: 36px;
  padding: 0 10px;
`;
