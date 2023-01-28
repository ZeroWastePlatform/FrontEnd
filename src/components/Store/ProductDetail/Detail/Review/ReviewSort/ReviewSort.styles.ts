import styled from "styled-components";

export const ReviewSortLayout = styled.div`
  display: flex;
  gap: 10px;
  border-bottom: 1px solid #eaeaea;
`;

export const ReviewSortItem = styled.div<{ selected: boolean }>`
  font-weight: 600;
  padding: 0 0 10px 0;
  border-bottom: ${props => (props.selected ? "2px solid black" : "none")};
`;
