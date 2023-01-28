import styled from "styled-components";

export const ProductCardListLayout = styled.div`
  width: 100%;
  margin: 0 0 50px 0;
`;

export const ProductCardListGrid = styled.div`
  max-width: 1200px;
  margin: auto;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-column-gap: 15px;
  grid-row-gap: 50px;
`;

export const ProductCardListTopBox = styled.div`
  max-width: 1200px;
  display: flex;
  justify-content: space-between;
  margin: 0 auto 20px auto;
`;

export const ProductCardListTotalText = styled.span`
  font-weight: 600;
`;
