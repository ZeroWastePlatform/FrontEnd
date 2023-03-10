import { Link } from "react-router-dom";
import styled from "styled-components";

export const ProductCardLayout = styled.article`
  width: 100%;
  position: relative;
  :hover {
    opacity: 0.5;
  }
`;

export const ProductCardCol = styled(Link)`
  display: flex;
  flex-direction: column;
  gap: 26px;
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
  left: 0;
  background-color: #d9d9d9;
  border-radius: 10px;
`;

export const ProductRankImg = styled.img`
  position: absolute;
  z-index: 5;
  left: 22px;
`;

export const ProductRank = styled.div`
  position: absolute;
  z-index: 10;
  left: 44px;
  top: 7px;
  font-weight: 700;
  font-size: 32px;
  color: ${({ theme }) => theme.colors.gray0};
`;

export const ProdcutCardLikeIcon = styled.div`
  position: absolute;
  bottom: 10px;
  right: 10px;
  font-size: 35px;
  color: white;
  z-index: 10;
`;

export const ProductCardInfoList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 15px;
`;

export const ProductCardBrand = styled.div`
  font-weight: 500;
  font-size: 20px;
`;

export const ProductCardTitle = styled.div`
  font-weight: 500;
  font-size: 24px;
`;

export const ProductCardPriceBox = styled.div`
  display: flex;
  gap: 20px;
`;

export const ProductCardDiscountRate = styled.div`
  font-weight: 700;
  font-size: 24px;
  color: ${({ theme }) => theme.colors.primaryPurple100};
`;
export const ProductCardPrice = styled.div`
  font-weight: 700;
  font-size: 24px;
`;

export const ProductCardDiscountPrice = styled.div`
  font-weight: 700;
  font-size: 24px;
  color: ${({ theme }) => theme.colors.gray4};
  text-decoration: line-through;
`;

export const ProductCardBadgeList = styled.ul`
  display: flex;
  gap: 12px;
`;

export const ProductCardBadgeItem = styled.li<{ type: string }>`
  width: 92px;
  height: 36px;
  border-radius: 10px;
  background: ${({ theme, type }) => theme.colors[badgeType[type].background]};
  color: ${({ theme, type }) => theme.colors[badgeType[type].color]};
  border: 1px solid ${({ theme, type }) => theme.colors[badgeType[type].border]};
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 24px;
  font-weight: 400;
`;

const badgeType: { [index: string]: { background: string; color: string; border: string } } = {
  BEST: { background: "primaryPurple100", color: "gray0", border: "primaryPurple100" },
  NEW: { background: "gray0", color: "primaryGreen100", border: "primaryGreen100" },
  SALE: { background: "primaryGreen100", color: "gray0", border: "primaryGreen100" },
};
