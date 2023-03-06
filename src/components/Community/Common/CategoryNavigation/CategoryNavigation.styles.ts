import styled from "styled-components";

export const CategoryNavigationLayout = styled.div`
  border: 2px solid #e8e8e8;
`;

export const CategoryNavigationBox = styled.div`
  max-width: 1320px;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-left: 240px;
  padding-right: 40px;
  font-size: 18px;
  font-weight: 700;
`;

export const CategoryNavigationList = styled.ul`
  display: flex;
`;

export const CategoryNavigationItem = styled.li`
  position: relative;
  padding: 20px 0;
  margin: 0 20px;

  &.active {
    color: ${({ theme }) => theme.colors.primaryGreen100};

    &::after {
      position: absolute;
      content: "";
      width: 100%;
      height: 3px;
      bottom: -2px;
      left: 0;
      background-color: ${({ theme }) => theme.colors.primaryGreen100};
    }
  }
`;

export const CategoryNavigationSortBox = styled.div``;
