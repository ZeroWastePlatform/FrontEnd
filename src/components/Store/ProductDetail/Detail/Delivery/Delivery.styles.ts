import styled from "styled-components";

export const DeliveryLayout = styled.div`
  width: 100%;
  padding: 100px 0 0 0;
`;

export const DeliveryCol = styled.div`
  display: flex;
  flex-direction: column;
  gap: 50px;
  max-width: 1200px;
  margin: auto;
`;

export const DeliveryBox = styled.div``;

export const DeliveryTitle = styled.h3`
  font-size: 18px;
  font-weight: 600;
  margin: 0 0 15px 0;
`;

export const DeliveryRow = styled.div`
  border-bottom: 1px solid #eaeaea;
  padding: 10px 0;
  display: flex;
`;

export const DeliverySubTitle = styled.div`
  font-size: 16px;
  font-weight: 400;
  color: gray;
  width: 300px;
`;

export const DeliveryText = styled.div``;

export const DeliveryAlertText = styled.div`
  color: #979797;
  margin: 0 0 10px 0;
`;

export const DeliveryOrderList = styled.ol`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

export const DeliveryItem = styled.li`
  & > i {
    font-weight: 600;
    margin: 0 20px 0 0;
  }
`;
