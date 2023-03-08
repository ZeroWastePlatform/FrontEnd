import styled, { css } from "styled-components";
import charactersLogoImg from "../../assets/images/characters-logo.png";
import bigLogoImg from "../../assets/images/big-logo.svg";
import kakaoImg from "../../assets/images/kakao-logo.png";
import naverImg from "../../assets/images/naver-logo.png";
import googleImg from "../../assets/images/google-logo.png";

export const LoginLayout = styled.div`
  max-width: 420px;
  margin: 0 auto;
`;

export const LoginImgBox = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  gap: 30px;
  margin-top: 70px;
`;

export const LoginCharactersLogoImg = styled.img.attrs({
  src: `${charactersLogoImg}`,
})`
  width: 190px;
`;

export const LoginLogoImg = styled.img.attrs({
  src: `${bigLogoImg}`,
})`
  width: 260px;
`;

export const LoginButtonBox = styled.div`
  margin-top: 120px;
`;

export const LoginButton = styled.button<{ authType: string; bgColor: string }>`
  position: relative;
  border: 0;
  width: 100%;
  height: 60px;
  border-radius: 50px;
  cursor: pointer;
  margin-bottom: 20px;
  font-size: 16px;
  background-color: ${({ bgColor }) => bgColor};
  color: ${({ authType }) => authType === "naver" && "#FFFFFF"};
  ${({ authType }) =>
    authType === "google" &&
    css`
      border: 2px solid #f1f4f5;
    `}

  &::after {
    position: absolute;
    ${({ authType }) => {
      const img =
        authType === "kakao" ? kakaoImg : authType === "naver" ? naverImg : authType === "google" && googleImg;
      return css`
        background-image: url(${img});
      `;
    }};
    background-repeat: no-repeat;
    background-size: 40px;
    content: "";
    width: 40px;
    height: 40px;
    left: 35px;
    top: 50%;
    transform: translateY(-50%);
  }
`;

export const LoginTextBox = styled.div`
  text-align: center;
  margin-top: 100px;
`;

export const LoginText = styled.span`
  text-decoration: underline;
  color: ${({ theme }) => theme.colors.gray6};
  cursor: pointer;
`;
