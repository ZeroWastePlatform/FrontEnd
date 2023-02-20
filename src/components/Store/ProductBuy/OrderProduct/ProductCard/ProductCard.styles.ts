import styled from "styled-components";

export const ProductCardLayout = styled.div`
  display: flex;
  gap: 10px;
`;

export const ProductCardInputBlock = styled.div`
  width: 25px;
`;

export const ProductCardInput = styled.input``;

export const ProductCardImg = styled.img`
  background-color: beige;
  width: 158px;
  height: 158px;
`;

export const ProductCardInfoBox = styled.div`
  gap: 10px;
  display: flex;
  flex-direction: column;
  width: 600px;
`;

export const ProductCardInfoBrand = styled.div`
  color: #919193;
  font-size: 20px;
  font-weight: 500;
`;

export const ProductCardInfoName = styled.div``;

export const ProductCardInfoOptionBox = styled.div`
  background-color: #f1f4f5;
  height: 30px;
  display: flex;
  align-items: center;
  padding: 0 10px;
`;

export const ProductCardInfoOptionText = styled.div`
  background-color: #f1f4f5;
  height: 20px;
  color: #646667;
`;

export const ProductCardInfoOptionButton = styled.div`
  padding: 5px;
  border-left: 1px solid #646667;
  margin-left: auto;
  color: #646667;
`;

export const ProductCardInfoPrice = styled.div``;

export const ProductCardInfoButtonBox = styled.div`
  margin-top: auto;
  display: flex;
  justify-content: space-between;
`;

export const ProductCardBuyBox = styled.div`
  width: 200px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 10px;
`;

export const ProductCardBuyBoxText = styled.div`
  font-weight: 700;
  font-size: 24px;
`;

export const ProductCardBuyBoxButton = styled.button`
  padding: 5px 15px;
  border: 1px solid #66f095;
  color: #66f095;
  border-radius: 20px;
  background-color: white;
`;
