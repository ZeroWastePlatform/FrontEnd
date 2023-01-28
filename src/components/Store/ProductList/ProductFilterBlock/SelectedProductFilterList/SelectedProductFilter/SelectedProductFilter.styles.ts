import styled from "styled-components";

export const SelectedProductFilterLayout = styled.button`
  padding: 5px 10px;
  background-color: #d9d9d9;
  border-radius: 20px;
  display: flex;
  align-items: center;
  gap: 5px;
  position: relative;
`;

export const SelectedProductFilterName = styled.span`
  display: flex;
  align-items: center;
  &::after {
    content: "X";
    margin-left: 3px;
    opacity: 0;
  }
`;

export const SelectedProductFilterDeleteIcon = styled.div`
  position: absolute;
  top: 4px;
  right: 8px;
  background-color: #d9d9d9;
  display: flex;
  font-weight: 600;
`;
