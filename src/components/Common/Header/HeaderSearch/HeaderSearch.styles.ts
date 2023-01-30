import styled from "styled-components";
import searchImg from "../../../../assets/images/search-icon.png";

export const HeaderSearchLayout = styled.div`
  position: relative;
`;

export const HeaderSearchInput = styled.input`
  width: 475px;
  border-radius: 30px;
  border: 1px solid #787878;
  padding: 12px 50px 12px 20px;
`;

export const HeaderSearchImg = styled.img.attrs({
  src: `${searchImg}`,
})`
  position: absolute;
  right: 20px;
  top: 50%;
  transform: translateY(-50%);
`;
