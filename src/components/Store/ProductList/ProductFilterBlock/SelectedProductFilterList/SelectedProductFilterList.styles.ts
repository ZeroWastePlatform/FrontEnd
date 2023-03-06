import styled from "styled-components";

export const SelectedProductFilterListLayout = styled.div`
  display: flex;
  gap: 10px;
  background-color: ${({ theme }) => theme.colors.primaryPurple10};
  border-top: 1px solid ${({ theme }) => theme.colors.gray3};
  margin: 20px 0 0 0;
  height: 100px;
  padding: 0 10px;
  align-items: center;
`;

export const SelectedProductFilterListBlock = styled.div`
  display: flex;
  gap: 10px;
  align-items: center;
  width: 1080px;
  white-space: nowrap;
  overflow-x: scroll;
`;

export const SelectedProductFilterListButton = styled.button`
  width: 110px;
  height: 22px;
  font-size: 24px;
  font-weight: 400;
  display: flex;
  gap: 5px;
  justify-content: center;
  align-items: center;
`;
