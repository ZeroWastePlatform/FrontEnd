import styled from "styled-components";

export const CategoryNavigationLayout = styled.nav`
  width: 100%;
  border-bottom: 1px solid #eaeaea;
  position: sticky;
  top: 0;
  z-index: 10;
  background-color: white;
  overflow: auto;
`;

export const CategoryNavigationRow = styled.ul`
  width: 1200px;
  display: flex;
  justify-content: center;
  margin: auto;
  @media screen and (max-width: 1200px) {
    padding: 0 20px;
  }
`;

export const CategoryNavigationItem = styled.li<{ same: boolean }>`
  font-weight: 700;
  font-size: 20px;
  border-bottom: ${({ same, theme }) => (same ? `2px solid ${theme.colors.primaryGreen100}` : "none")};
  color: ${({ same, theme }) => (same ? theme.colors.primaryGreen100 : "#000000")};
  padding: 27px 15px;
`;
