import styled from "styled-components";

export const ShipInfoLayout = styled.div`
  margin: 0 0 40px 0;
`;

export const ShipInfoCol = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

export const ShipInfoCheckbox = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 15px;
  font-size: 14px;
  & > input {
    margin-right: 10px;
  }
`;

export const ShipInfoAddressSearchButton = styled.button`
  width: 111px;
  height: 36px;
  color: white;
  background-color: #646667;
  margin: 0 0 0 10px;
  border-radius: 3px;
  font-size: 16px;
`;

export const ShipInfoAddressInputBlock = styled.div`
  display: flex;
  align-items: center;
`;

export const ShipInfoAddressInput = styled.input<{ type: string }>`
  width: ${({ type }) => (type === "short" ? "90px" : "474px")};
  margin-left: ${({ type }) => (type === "short" ? "0" : "100px")};
  height: 36px;
  padding: 0 10px;
`;

export const ShipInfoAddressInputTitle = styled.div`
  font-weight: 500;
  font-size: 16px;
  width: 100px;
`;
