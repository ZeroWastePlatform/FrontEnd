import styled from "styled-components";
import charactersImg from "../../../assets/images/characters-logo.png";
import bigLogoImg from "../../../assets/images/big-logo.svg";

export const LogoImgBox = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  gap: 30px;
  margin-top: 70px;
  height: 173px;
`;

export const CharactersImg = styled.img.attrs({
  src: `${charactersImg}`,
})`
  width: 190px;
`;

export const LogoImg = styled.img.attrs({
  src: `${bigLogoImg}`,
})`
  width: 260px;
`;
