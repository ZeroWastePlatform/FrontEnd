import React from "react";
import { Link, useLocation, useParams, useSearchParams } from "react-router-dom";
import CustomSelect from "../../../Common/CustomSelect/CustomSelect";
import CustomSelectContainer from "../../../Common/CustomSelect/CustomSelectContainer";
import CategoryNavigation from "../CategoryNavigation/CategoryNavigation";
import {
  CommunityHeaderBox,
  CommunityHeaderCategoryItem,
  CommunityHeaderCategoryList,
  CommunityHeaderKeywordBox,
  CommunityHeaderKeywordItem,
  CommunityHeaderKeywordList,
  CommunityHeaderKeywordText,
  CommunityHeaderLayout,
  CommunityHeaderTitle,
} from "./CommunityHeader.styles";

interface CommunityHeaderProps {
  title: string;
  categoryList: string[] | null;
}

const CommunityHeader = ({ title, categoryList }: CommunityHeaderProps) => {
  const { type } = useParams();
  const [searchParams, setSearchParams] = useSearchParams();
  const category = searchParams.get("category");
  return (
    <>
      <CategoryNavigation />
      <CommunityHeaderLayout>
        <CommunityHeaderTitle>{title}</CommunityHeaderTitle>
        <CommunityHeaderBox>
          {type === "board" ? (
            <CommunityHeaderKeywordBox>
              <CommunityHeaderKeywordText>인기 검색 키워드</CommunityHeaderKeywordText>
              <CommunityHeaderKeywordList>
                <CommunityHeaderKeywordItem>#ee</CommunityHeaderKeywordItem>
              </CommunityHeaderKeywordList>
            </CommunityHeaderKeywordBox>
          ) : (
            <CommunityHeaderCategoryList>
              {categoryList?.map((item, idx) => (
                <CommunityHeaderCategoryItem key={idx} className={category === item ? "active" : ""}>
                  <Link to={`/community/${type}?category=${item}`}>{item}</Link>
                </CommunityHeaderCategoryItem>
              ))}
            </CommunityHeaderCategoryList>
          )}
          <CustomSelectContainer initialValue="최신 순" options={["최신 순", "추천 순", "조회수 순"]} />
        </CommunityHeaderBox>
      </CommunityHeaderLayout>
    </>
  );
};

export default CommunityHeader;
