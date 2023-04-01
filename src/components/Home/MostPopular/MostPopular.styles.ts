import { Link } from "react-router-dom";
import styled from "styled-components";

export const MostPopularLayout = styled.div`
  max-width: 1320px;
  margin: 0 auto;
  margin-bottom: 50px;
`;

export const MostPopularCategoryList = styled.ul`
  display: flex;
  gap: 30px;
  margin-bottom: 30px;
`;

export const MostPopularCategoryItem = styled.li``;

export const MostPopularCategoryItemButton = styled.button<{ match: boolean }>`
  display: inline-block;
  padding: 10px 20px;
  background-color: ${({ match, theme }) => (match ? theme.colors.primaryPurple60 : theme.colors.primaryPurple20)};
  border-radius: 27px;
  font-weight: 700;
`;
export const MostPopularProductList = styled.div`
  max-width: 1320px;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 10px;
`;
