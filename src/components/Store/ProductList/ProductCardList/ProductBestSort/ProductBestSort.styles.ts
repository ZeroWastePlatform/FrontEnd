import styled from "styled-components";

export const ProductBestSortLayout = styled.div`
  width: 158px;
  height: 56px;
  border: 1px solid ${({ theme }) => theme.colors.gray3};
  position: relative;
`;
export const ProductBestSortButton = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 10px;
  font-weight: 500;
  font-size: 20px;
  :hover {
    background-color: #fafafa;
  }
`;

export const ProductBestSortList = styled.div`
  position: absolute;
  top: 54px;
  left: -1px;
  border: 1px solid ${({ theme }) => theme.colors.gray3};
  z-index: 15;
  margin: 0;
`;

export const ProductBestSortItem = styled.div`
  width: 156.1px;
  height: 56px;
  padding: 0 10px;
  background-color: white;
  display: flex;
  align-items: center;
  font-weight: 500;
  font-size: 20px;
  :hover {
    background-color: #fafafa;
  }
`;
