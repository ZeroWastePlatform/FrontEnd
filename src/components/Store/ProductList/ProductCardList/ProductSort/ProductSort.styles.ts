import styled from "styled-components";

export const ProductSortLayout = styled.div`
  max-width: 1200px;
`;

export const ProductSortRow = styled.div`
  display: flex;
  gap: 10px;
`;

export const ProductSortText = styled.button<{ same: boolean }>`
  font-weight: ${props => (props.same ? "600" : "400")};
  padding: 0;
`;
