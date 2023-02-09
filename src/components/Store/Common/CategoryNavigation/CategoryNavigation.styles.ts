import styled from "styled-components";

export const CategoryNavigationLayout = styled.nav`
  width: 100%;
  border-bottom: 2px solid #e8e8e8;
`;

export const CategoryNavigationRow = styled.ul`
  width: 1200px;
  display: flex;
  gap: 30px;
  margin: auto;
`;

export const CategoryNavigationItem = styled.li<{ same: boolean }>`
  font-weight: 700;
  font-size: 24px;
  border-bottom: ${props => (props.same ? "4px solid #66F095" : "none")};
  padding: 20px 0;
`;
