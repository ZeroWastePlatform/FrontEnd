import styled from "styled-components";

export const ReviewSortLayout = styled.div`
  display: flex;
  gap: 32px;
  border-bottom: 2px solid #e8e8e8;
`;

export const ReviewSortItem = styled.div<{ selected: boolean }>`
  font-size: 24px;
  font-weight: 700;
  padding: 0 0 10px 0;
  border-bottom: ${props => (props.selected ? "4px solid black" : "none")};
`;
