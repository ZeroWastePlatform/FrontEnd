import styled from "styled-components";

export const PayMethodLayout = styled.div`
  margin-bottom: 100px;
`;

export const PayMethodPayBoxList = styled.div`
  display: flex;
  justify-content: center;
`;

export const PayMethodPayBox = styled.div<{ selectedIndex: number; curindex: number }>`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 10px;
  width: 120px;
  height: 120px;
  background: ${({ selectedIndex, curindex }) => (selectedIndex === curindex ? "#F0FEF4" : "#FFFFFF")};
  border: ${({ selectedIndex, curindex }) => (selectedIndex === curindex ? "2px solid #66F095" : "1px solid #D3D3D4")};
  font-size: 16px;
  font-weight: 500;
  border-left: ${({ selectedIndex, curindex }) =>
    selectedIndex === curindex ? "2px solid #66F095" : curindex === 0 ? "1px solid #D3D3D4" : "none"};
  border-right: ${({ selectedIndex, curindex }) =>
    selectedIndex === curindex ? "2px solid #66F095" : selectedIndex - 1 !== curindex ? "1px solid #D3D3D4" : "none"};
  font-size: 16px;
  cursor: pointer;
`;

export const PayMethodImg = styled.img`
  width: 50px;
  height: 50px;
`;
