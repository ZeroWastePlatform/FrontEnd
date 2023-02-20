import styled from "styled-components";

export const PayMethodLayout = styled.div`
  margin-bottom: 100px;
`;

export const PayMethodPayBoxList = styled.div`
  display: flex;
  justify-content: center;
`;

export const PayMethodPayBox = styled.div<{ selected: boolean }>`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 10px;
  width: 100px;
  height: 100px;
  background: ${props => (props.selected ? "#F0FEF4" : "#FFFFFF")};
  border: ${props => (props.selected ? "1px solid #66F095" : "1px solid #D3D3D4")};
`;

export const PayMethodImg = styled.img`
  width: 50px;
  height: 50px;
`;
