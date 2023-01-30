import styled from "styled-components";
import logoImg from "../../../assets/images/logo.png";
import bagImg from "../../../assets/images/bag-04.png";
import heartImg from "../../../assets/images/heart.png";

export const HeaderLayout = styled.div`
  display: flex;
  gap: 20px;
  align-items: center;
  justify-content: space-between;
  max-width: 1320px;
  margin: 0 auto;
  padding: 40px 0;
`;

export const HeaderLogoImg = styled.img.attrs({
  src: `${logoImg}`,
})``;

export const HeaderBoldText = styled.span`
  font-size: 24px;
  font-weight: 700;
  padding: 0 20px;
`;
export const HeaderText = styled.span`
  padding: 0 25px;
`;

export const HeaderHeartImg = styled.img.attrs({
  src: `${heartImg}`,
})``;

export const HeaderBagImg = styled.img.attrs({
  src: `${bagImg}`,
})`
  padding: 0 10px;
`;

export const HeaderNotLoggedInMenuBox = styled.div``;
