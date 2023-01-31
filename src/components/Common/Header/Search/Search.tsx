import React from "react";
import { SearchImg, SearchInput, SearchLayout } from "./Search.styles";

const Search = () => {
  return (
    <SearchLayout>
      <SearchInput type="text" placeholder="고체치약을 검색해보세요." />
      <SearchImg />
    </SearchLayout>
  );
};

export default Search;
