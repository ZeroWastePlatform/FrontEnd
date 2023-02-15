import styled from "styled-components";

export const ProductCardItemLayout = styled.div`
  display: flex;
  flex-direction: column;
  width: 426px;
  gap: 10px;
`;

export const ProductCardItemImg = styled.img`
  width: 100%;
  height: 311px;
  background-color: #eee;
  border-radius: 10px;
`;

export const ProductCardItemTitle = styled.p`
  font-size: 18px;
`;

export const ProductCardItemPrice = styled.span``;

export const ProductCardItemStateBox = styled.div`
  display: flex;
  gap: 10px;
`;

export const ProductCardItemState = styled.div`
  border: 1px solid #797979;
  padding: 0 13px;
  height: 25px;
  line-height: 25px;
  box-sizing: border-box;
`;
