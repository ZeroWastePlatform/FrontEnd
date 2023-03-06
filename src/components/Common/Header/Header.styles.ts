import styled from "styled-components";
import logoImg from "../../../assets/images/header-logo.svg";
import bagImg from "../../../assets/images/bag-04.svg";
import heartImg from "../../../assets/images/heart.svg";

export const HeaderLayout = styled.div`
  box-shadow: 0px 2px 10px rgba(0, 0, 0, 0.1);
`;

export const HeaderBox = styled.div`
  display: flex;
  gap: 20px;
  align-items: center;
  justify-content: space-between;
  max-width: 1320px;
  margin: 0 auto;
  padding: 20px 0;
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
