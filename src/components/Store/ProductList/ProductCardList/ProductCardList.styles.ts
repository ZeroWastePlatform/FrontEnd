import styled from "styled-components";

export const ProductCardListNoResultLayout = styled.div`
  width: 100%;
  height: 700px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

export const ProductCardListNoResultTitle = styled.div`
  font-size: 32px;
  font-weight: 700;
  margin-bottom: 30px;
`;

export const ProductCardListLayout = styled.div`
  width: 100%;
  margin: 0 0 50px 0;
`;

export const ProductCardListGrid = styled.div`
  width: 1200px;
  margin: auto;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-column-gap: 15px;
  grid-row-gap: 50px;
  @media screen and (max-width: 1200px) {
    width: calc(100% - 40px);
  }
`;

export const ProductCardListTopBox = styled.div`
  width: 1200px;
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  height: 60px;
  margin: 0 auto 19px auto;
  @media screen and (max-width: 1200px) {
    width: calc(100% - 40px);
  }
`;

export const ProductCardListTotalText = styled.span`
  font-weight: 600;
`;
