import styled from "styled-components";

export const ProductFilterRowLayout = styled.div`
  display: flex;
  height: 50px;
  border-bottom: 1px solid #eaeaea;
`;

export const ProductFilterRowTitle = styled.div`
  min-width: 100px;
  font-weight: 600;
  display: flex;
  align-items: center;
`;

export const ProductFilterRowList = styled.ul`
  display: flex;
  gap: 10px;
  overflow: auto;
  white-space: nowrap;
`;
