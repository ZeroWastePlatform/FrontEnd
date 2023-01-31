import reset from "styled-reset";
import { createGlobalStyle } from "styled-components";
import defaultCheckboxImg from "../assets/images/default-checkbox.png";
import checkedImg from "../assets/images/checked.png";

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
  }

  input[type="checkbox"] {
    width: 1.5em;
    height: 1.5em;
    cursor: pointer;
    outline: none;
    appearance: none;
    background-image: url(${defaultCheckboxImg});
  }

  input[type="checkbox"]:checked {
    background-image: url(${checkedImg});
  }
  `;

export default GlobalStyle;
