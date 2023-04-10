import styled from "styled-components";

export const ProductInterestLayout = styled.section``;

export const ProductInterestRow = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 48px;
`;

export const ProductInterestBox = styled.div`
  display: flex;
  gap: 15px;
`;

export const ProductInterestParagraph = styled.span`
  font-family: "Pretendard";
  font-weight: 700;
  font-size: 32px;
  line-height: 38px;
  color: #000000;
`;

export const ProductInterestNumber = styled.span`
  font-family: "Pretendard";
  font-weight: 700;
  font-size: 32px;
  line-height: 38px;
  color: #66f095;
`;

export const EditButon = styled.button`
  font-family: "Pretendard";
  font-weight: 500;
  font-size: 20px;
  line-height: 24px;
  letter-spacing: 0.2px;
  color: #7a7b7d;
  background-color: white;
  border: 0;
`;

export const ProductInterestSection = styled.section`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 30px;
`;

export const ProductArticle = styled.article`
  display: flex;
  gap: 20px;
  img {
    width: 203px;
    height: 203px;
  }
`;

export const ProductInfoDetailBox = styled.div`
  display: flex;
  flex-direction: column;
`;

export const ProductBrand = styled.p`
  font-family: "Pretendard";
  font-weight: 500;
  font-size: 20px;
  line-height: 24px;
  color: #646667;
`;

export const ProductName = styled.p`
  font-family: "Pretendard";
  font-weight: 500;
  font-size: 24px;
  line-height: 29px;
  margin-top: 10px;
  height: 100px;
`;

export const ProductPrice = styled.p`
  font-family: "Pretendard";
  font-weight: 700;
  font-size: 24px;
  line-height: 22px;
  color: #000000;
  margin-bottom: 15px;
`;

export const ProductLikeCount = styled.p`
  font-family: "Pretendard";
  font-weight: 700;
  font-size: 20px;
  line-height: 22px;
  color: #a7a7a8;
`;
