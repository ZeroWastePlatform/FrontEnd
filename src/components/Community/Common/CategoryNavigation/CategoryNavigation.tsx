import React from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import {
  CategoryNavigationBox,
  CategoryNavigationItem,
  CategoryNavigationLayout,
  CategoryNavigationList,
  CategoryNavigationWrite,
} from "./CategoryNavigation.styles";

const categoryList = [
  {
    path: "board",
    name: "자유게시판",
  },
  {
    path: "market",
    name: "중고거래",
  },
  {
    path: "sharing",
    name: "정보공유",
  },
];

const CategoryNavigation = () => {
  const { type } = useParams();
  const navigate = useNavigate();

  const handleWriteClick = () => {
    if (localStorage.getItem("accessToken")) {
      navigate("/community/write");
    } else {
      alert("로그인이 필요한 서비스 입니다.");
      navigate("/login");
    }
  };
  return (
    <CategoryNavigationLayout>
      <CategoryNavigationBox>
        <CategoryNavigationList>
          {categoryList.map((category, idx) => (
            <CategoryNavigationItem key={idx} className={category.path === type ? "active" : ""}>
              <Link to={`/community/${category.path}`}>{category.name}</Link>
            </CategoryNavigationItem>
          ))}
        </CategoryNavigationList>
        <CategoryNavigationWrite onClick={handleWriteClick}>글쓰기</CategoryNavigationWrite>
      </CategoryNavigationBox>
    </CategoryNavigationLayout>
  );
};

export default CategoryNavigation;
