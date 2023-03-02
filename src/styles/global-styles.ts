import reset from "styled-reset";
import { createGlobalStyle } from "styled-components";
import checkboxDefault from "../assets/images/checkbox-default.svg";
import checkboxChecked from "../assets/images/checkbox-checked.svg";
import radioDefault from "../assets/images/radio-default.svg";
import radioChecked from "../assets/images/radio-checked.svg";

const GlobalStyle = createGlobalStyle`
  ${reset}
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
  `;

export default GlobalStyle;
