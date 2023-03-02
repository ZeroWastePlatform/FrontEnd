import styled from "styled-components";

export const CategoryNavigationLayout = styled.nav`
  border: 2px solid #e8e8e8;
`;

export const CategoryNavigationRow = styled.ul`
  display: flex;
  gap: 50px;
  justify-content: center;
`;

export const CategoryNavigationItem = styled.li<{ isSelected: boolean }>`
  font-weight: 700;
  font-size: 24px;
  padding: 30px 0;
  font-family: "Pretendard";
  line-height: 22px;
  border-bottom: ${props => (props.isSelected ? "4px solid #66F095" : "none")};
  color: ${props => (props.isSelected ? "#66F095" : "none")};
`;
