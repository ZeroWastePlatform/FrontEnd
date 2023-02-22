import React from "react";
import CategoryNavigation from "./CategoryNavigation/CategoryNavigation";
import {
  CommunityHeaderBox,
  CommunityHeaderKeywordBox,
  CommunityHeaderKeywordItem,
  CommunityHeaderKeywordList,
  CommunityHeaderKeywordText,
  CommunityHeaderLayout,
  CommunityHeaderTitle,
  CommunityHeaderWriteAnchor,
  CommunityHeaderWriteImg,
} from "./CommunityHeader.styles";

const CommunityHeader = () => {
  return (
    <>
      <CategoryNavigation></CategoryNavigation>
      <CommunityHeaderLayout>
        <CommunityHeaderTitle>자유게시판</CommunityHeaderTitle>
        <CommunityHeaderBox>
          <CommunityHeaderKeywordBox>
            <CommunityHeaderKeywordText>인기 검색 키워드</CommunityHeaderKeywordText>
            <CommunityHeaderKeywordList>
              <CommunityHeaderKeywordItem>#ee</CommunityHeaderKeywordItem>
              <CommunityHeaderKeywordItem>#리리리</CommunityHeaderKeywordItem>
              <CommunityHeaderKeywordItem>#추천</CommunityHeaderKeywordItem>
              <CommunityHeaderKeywordItem>#추천다</CommunityHeaderKeywordItem>
            </CommunityHeaderKeywordList>
          </CommunityHeaderKeywordBox>
          <CommunityHeaderWriteAnchor to={"/community/write"}>
            글쓰기
            <CommunityHeaderWriteImg />
          </CommunityHeaderWriteAnchor>
        </CommunityHeaderBox>
      </CommunityHeaderLayout>
    </>
  );
};

export default CommunityHeader;
