import styled from "styled-components";

export const DeliveryLayout = styled.div`
  width: 100%;
  padding: 100px 0 0 0;
`;

export const DeliveryCol = styled.div`
  display: flex;
  flex-direction: column;
  gap: 100px;
  max-width: 1200px;
  margin: auto;
`;

export const DeliveryBox = styled.div``;

export const DeliveryTitle = styled.h3`
  font-size: 24px;
  font-weight: 700;
  margin: 0 0 15px 0;
`;

export const DeliveryRow = styled.div`
  border-bottom: 1px solid #eaeaea;
  padding: 15px 0;
  display: flex;
  font-size: 20px;
  color: ${({ theme }) => theme.colors.gray4};
`;

export const DeliverySubTitle = styled.div`
  font-weight: 700;
  color: gray;
  width: 300px;
`;

export const DeliveryText = styled.div`
  font-weight: 400;
`;

export const DeliveryAlertText = styled.div`
  font-size: 20px;
  font-weight: 400;
  margin: 0 0 15px 0;
  color: ${({ theme }) => theme.colors.gray4};
`;

export const DeliveryOrderList = styled.ol`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

export const DeliveryItem = styled.li`
  display: flex;
  align-items: center;
  color: ${({ theme }) => theme.colors.gray9};
  & > i:first-child {
    font-size: 20px;
    font-weight: 700;
    margin: 0 20px 0 0;
    color: black;
  }
  & > i:nth-child(2) {
    font-family: Pretendard;
    font-size: 14px;
    font-weight: 400;
    color: ${({ theme }) => theme.colors.gray4};
    margin: 0 0 0 10px;
  }
`;
