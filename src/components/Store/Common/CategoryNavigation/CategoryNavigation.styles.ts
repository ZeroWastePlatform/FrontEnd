import styled from "styled-components";

export const CategoryNavigationLayout = styled.nav`
  width: 100%;
  border-bottom: 1px solid #eaeaea;
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
  border-bottom: ${props => (props.same ? "2px solid black" : "none")};
  padding: 20px 0;
`;
