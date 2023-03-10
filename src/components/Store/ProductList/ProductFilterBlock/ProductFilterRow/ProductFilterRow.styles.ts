import styled from "styled-components";

export const ProductFilterRowLayout = styled.div`
  display: flex;
  padding: 10px 0;
  & + & {
    border-top: 1px solid #eaeaea;
  }
`;

export const ProductFilterRowTitle = styled.div<{ wrap: string }>`
  width: 100px;
  margin-right: ${({ wrap }) => (wrap === "true" ? "55px" : 0)};
  font-weight: 600;
  display: flex;
  align-items: center;
`;

export const ProductFilterRowList = styled.ul`
  display: flex;
  gap: 10px;
  white-space: nowrap;
  overflow: scroll;
`;
