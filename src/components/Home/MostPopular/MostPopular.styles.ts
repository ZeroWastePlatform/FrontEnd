import { Link } from "react-router-dom";
import styled from "styled-components";

export const MostPopularLayout = styled.div`
  max-width: 1320px;
  margin: 0 auto;
  margin-bottom: 50px;
`;

export const MostPopularTitleBox = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 15px 0;
  border-bottom: 1px solid #d9d9d9;
  margin-bottom: 30px;
`;

export const MostPopularTitle = styled.p`
  font-weight: 700;
  font-size: 24px;
`;

export const MostPopularSubTitle = styled.span`
  font-weight: 700;
  font-size: 16px;
`;

export const MostPopularCategoryList = styled.ul`
  display: flex;
  gap: 30px;
  margin-bottom: 30px;
`;

export const MostPopularCategoryItem = styled.li``;

export const MostPopularCategoryAnchor = styled(Link)`
  display: inline-block;
  padding: 10px 20px;
  background-color: #d9d9d9;
  border-radius: 27px;
  font-weight: 700;
`;
