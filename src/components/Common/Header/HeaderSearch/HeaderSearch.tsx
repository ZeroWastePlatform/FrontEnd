import React from "react";
import { HeaderSearchImg, HeaderSearchInput, HeaderSearchLayout } from "./HeaderSearch.styles";

const HeaderSearch = () => {
  return (
    <HeaderSearchLayout>
      <HeaderSearchInput type="text" placeholder="고체치약을 검색해보세요." />
      <HeaderSearchImg />
    </HeaderSearchLayout>
  );
};

export default HeaderSearch;
