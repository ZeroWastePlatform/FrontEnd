import styled from "styled-components";

export const SelectedProductFilterLayout = styled.button`
  height: 42px;
  padding: 0 20px;
  background-color: ${({ theme }) => theme.colors.primaryPurple100};
  color: ${({ theme }) => theme.colors.gray0};
  border-radius: 20px;
  display: flex;
  align-items: center;
  gap: 5px;
`;

export const SelectedProductFilterName = styled.div`
  font-weight: 400;
  font-size: 24px;
`;

export const SelectedProductFilterDeleteIcon = styled.img`
  width: 12px;
  height: 12px;
`;
