import { Link } from "react-router-dom";
import styled from "styled-components";

export const ProductListLayout = styled.div`
  width: 100%;
  margin: 0 0 40px 0;
`;

export const ProductListRow = styled.div`
  width: 1600px;
  display: flex;
  gap: 20px;
  margin: auto;
`;

export const ProductListCol = styled.div`
  display: flex;
  flex-direction: column;
`;

export const ProductListInputBlock = styled.div`
  display: flex;
  align-items: center;
  & > i {
    font-weight: 500;
    font-size: 20px;
    color: ${({ theme }) => theme.colors.gray4};
    margin-left: 10px;
  }
`;

export const ProductListNoContentLayout = styled.div`
  width: 100vw;
  height: calc(100vh - 170px);
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 80px;
  flex-direction: column;
`;

export const ProductListNoContentTitle = styled.h1`
  font-size: 32px;
  font-weight: 700;
`;

export const ProductListNoContentButton = styled(Link)`
  background: #66f095;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 79px;
  margin: 20px 0 0 0;
  border-radius: 10px;
  width: 472px;
  border: none;
  cursor: pointer;
`;

export const ProductListNoContentButtonText = styled.div`
  color: white;
  font-size: 24px;
  font-weight: 700;
`;
