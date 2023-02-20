import styled from "styled-components";
import DaumPostcode from "react-daum-postcode";

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
`;

export const ShipInfoAddressSearchButton = styled.button`
  color: white;
  padding: 5px;
  background-color: #646667;
  margin: 0 0 0 10px;
  border-radius: 3px;
`;

export const ShipInfoAddressInput = styled.input`
  margin: 0 0 0 100px;
  width: 300px;
  height: 30px;
`;

export const ShipInfoPostCodeStyle = styled(DaumPostcode)`
  display: block;
  position: relative;
  top: 0%;
  width: 400px;
  height: 400px;
  padding: 7px;
`;
