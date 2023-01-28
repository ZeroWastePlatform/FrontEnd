import { Link } from "react-router-dom";
import styled from "styled-components";

export const ProductCardLayout = styled.article`
  width: 100%;
  position: relative;
`;

export const ProductCardCol = styled(Link)`
  display: flex;
  flex-direction: column;
  gap: 15px;
`;

export const ProductCardImgBox = styled.div`
  position: relative;
  width: 100%;
  padding-bottom: 100%;
`;

export const ProductCardImg = styled.img`
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0%;
  background-color: #d9d9d9;
  border-radius: 10px;
`;

export const ProductCardInfoList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

export const ProductCardBrand = styled.div`
  font-weight: 500;
  font-size: 14px;
`;

export const ProductCardTitle = styled.div`
  font-weight: 500;
  font-size: 18px;
`;
export const ProductCardPriceBox = styled.div`
  display: flex;
  gap: 10px;
`;
export const ProductCardDiscountRate = styled.div`
  font-weight: 600;
  font-size: 18px;
`;
export const ProductCardPrice = styled.div`
  font-weight: 600;
  font-size: 18px;
`;

export const ProductCardBadgeList = styled.ul`
  display: flex;
  gap: 10px;
`;

export const ProductCardBadgeItem = styled.li`
  width: 60px;
  height: 25px;
  border-radius: 5px;
  background: #ffb1b1;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const ProdcutCardLikeIcon = styled.div`
  position: absolute;
  bottom: 10px;
  right: 10px;
  font-size: 35px;
  color: white;
  z-index: 10;
`;
