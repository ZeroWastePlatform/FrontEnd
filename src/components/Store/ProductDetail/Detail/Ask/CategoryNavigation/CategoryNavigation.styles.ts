import styled from "styled-components";

export const CategoryNavigationLayout = styled.ul`
  display: flex;
  gap: 10px;
  margin-left: auto;
`;

export const CategoryNavigationItem = styled.li<{ selected: boolean }>`
  font-weight: ${props => (props.selected ? "600" : "400")};
`;
