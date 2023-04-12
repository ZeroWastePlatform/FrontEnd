import reset from "styled-reset";
import { createGlobalStyle } from "styled-components";
import checkboxDefault from "../assets/images/checkbox-default.svg";
import checkboxChecked from "../assets/images/checkbox-checked.svg";
import radioDefault from "../assets/images/radio-default.svg";
import radioChecked from "../assets/images/radio-checked.svg";
import PretendardBlackwoff2 from "../assets/fonts/woff2/Pretendard-Black.woff2";
import PretendardBlackwoff from "../assets/fonts/woff/Pretendard-Black.woff";
import PretendardExtraBoldwoff2 from "../assets/fonts/woff2/Pretendard-ExtraBold.woff2";
import PretendardExtraBoldwoff from "../assets/fonts/woff/Pretendard-ExtraBold.woff";
import PretendardBoldwoff2 from "../assets/fonts/woff2/Pretendard-Bold.woff2";
import PretendardBoldwoff from "../assets/fonts/woff/Pretendard-Bold.woff";
import PretendardSemiBoldwoff2 from "../assets/fonts/woff2/Pretendard-SemiBold.woff2";
import PretendardSemiBoldwoff from "../assets/fonts/woff/Pretendard-SemiBold.woff";
import PretendardMediumwoff2 from "../assets/fonts/woff2/Pretendard-Medium.woff2";
import PretendardMediumwoff from "../assets/fonts/woff/Pretendard-Medium.woff";
import PretendardRegularwoff2 from "../assets/fonts/woff2/Pretendard-Regular.woff2";
import PretendardRegularwoff from "../assets/fonts/woff/Pretendard-Regular.woff";
import PretendardLightwoff2 from "../assets/fonts/woff2/Pretendard-Light.woff2";
import PretendardLightwoff from "../assets/fonts/woff/Pretendard-Light.woff";
import PretendardExtraLightwoff2 from "../assets/fonts/woff2/Pretendard-ExtraLight.woff2";
import PretendardExtraLightwoff from "../assets/fonts/woff/Pretendard-ExtraLight.woff";
import PretendardThinwoff2 from "../assets/fonts/woff2/Pretendard-Thin.woff2";
import PretendardThinwoff from "../assets/fonts/woff/Pretendard-Thin.woff";

const GlobalStyle = createGlobalStyle`
  ${reset}
  @font-face {
	font-family: 'Pretendard';
	font-weight: 900;
	font-display: swap;
	src: local('Pretendard Black'), url(${PretendardBlackwoff2}) format('woff2'), url(${PretendardBlackwoff}) format('woff');
  }

  @font-face {
	font-family: 'Pretendard';
	font-weight: 800;
	font-display: swap;
	src: local('Pretendard ExtraBold'), url(${PretendardExtraBoldwoff2}) format('woff2'), url(${PretendardExtraBoldwoff}) format('woff');
  }

@font-face {
	font-family: 'Pretendard';
	font-weight: 700;
	font-display: swap;
	src: local('Pretendard Bold'), url(${PretendardBoldwoff2}) format('woff2'), url(${PretendardBoldwoff}) format('woff');
}

@font-face {
	font-family: 'Pretendard';
	font-weight: 600;
	font-display: swap;
	src: local('Pretendard SemiBold'), url(${PretendardSemiBoldwoff2}) format('woff2'), url(${PretendardSemiBoldwoff}) format('woff');
}

@font-face {
	font-family: 'Pretendard';
	font-weight: 500;
	font-display: swap;
	src: local('Pretendard Medium'), url(${PretendardMediumwoff2}) format('woff2'), url(${PretendardMediumwoff}) format('woff');
}

@font-face {
	font-family: 'Pretendard';
	font-weight: 400;
	font-display: swap;
	src: local('Pretendard Regular'), url(${PretendardRegularwoff2}) format('woff2'), url(${PretendardRegularwoff}) format('woff');
}

@font-face {
	font-family: 'Pretendard';
	font-weight: 300;
	font-display: swap;
	src: local('Pretendard Light'), url(${PretendardLightwoff2}) format('woff2'), url(${PretendardLightwoff}) format('woff');
}

@font-face {
	font-family: 'Pretendard';
	font-weight: 200;
	font-display: swap;
	src: local('Pretendard ExtraLight'), url(${PretendardExtraLightwoff2}) format('woff2'), url(${PretendardExtraLightwoff}) format('woff');
}

@font-face {
	font-family: 'Pretendard';
	font-weight: 100;
	font-display: swap;
	src: local('Pretendard Thin'), url(${PretendardThinwoff2}) format('woff2'), url(${PretendardThinwoff}) format('woff');
}
  * {
    box-sizing : border-box;
  }

  a {
    color:inherit;
    text-decoration:none;
  }
  
  button {
    cursor:pointer;
    background: none;
    border: none;
  }

  input[type="checkbox"] {
    width: 1.5em;
    height: 1.5em;
    cursor: pointer;
    outline: none;
    appearance: none;
    background-image: url(${checkboxDefault});
    /*TO-DO : 체크박스 기본 이미지 수정본 받아서 적용하기 */
  }

  input[type="checkbox"]:checked {
    background-image: url(${checkboxChecked});
  }

  input[type="radio"] {
    width: 21px;
    height: 21px;
    cursor: pointer;
    outline: none;
    appearance: none;
    background-image: url(${radioDefault});
  }

  input[type="radio"]:checked {
    background-image: url(${radioChecked});
  }

  * {
  font-family: 'Pretendard'!important;
}
  `;

export default GlobalStyle;
