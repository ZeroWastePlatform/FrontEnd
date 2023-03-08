import styled from "styled-components";
import searchImg from "../../../../assets/images/search-icon.svg";

export const SearchLayout = styled.div`
  width: 475px;
  position: relative;
`;

export const SearchInput = styled.input`
  width: 100%;
  border-radius: 30px;
  border: 1px solid #787878;
  padding: 12px 50px 12px 20px;
  box-sizing: border-box;
`;

export const SearchImg = styled.img.attrs({
  src: `${searchImg}`,
})`
  position: absolute;
  right: 20px;
  top: 50%;
  transform: translateY(-50%);
`;
