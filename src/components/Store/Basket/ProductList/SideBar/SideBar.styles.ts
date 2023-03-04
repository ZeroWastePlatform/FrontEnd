import styled from "styled-components";

export const SideBarBoxLayout = styled.div`
  display: flex;
  gap: 20px;
  flex-direction: column;
`;

export const SideBarBoxInfoBlock = styled.div`
  border: 1px solid #d3d3d4;
  width: 428px;
  height: 288px;
  padding: 45px;
  border-radius: 10px;
  margin: 0 0 15px 0;
`;

export const SideBarBoxCol = styled.div<{ margin: string }>`
  display: flex;
  justify-content: space-between;
  margin-bottom: ${props => props.margin};
`;

export const SideBarBoldText = styled.div`
  font-size: 24px;
  font-weight: 700;
  i {
    color: #66f095;
  }
`;

export const SideBarsubTitleText = styled.div`
  font-size: 20px;
  font-weight: 500;
  color: #646667;
`;

export const SideBarPriceText = styled.div<{ bold?: boolean }>`
  font-size: 20px;
  font-weight: ${props => (props.bold ? 700 : 500)};
  color: ${props => (props.bold ? "#252525" : "#646667")};
`;

export const SideBarButton = styled.button<{ active: string }>`
  background: #66f095;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 79px;
  margin: 20px 0 0 0;
  border-radius: 10px;
  width: 472px;
  border: none;
  opacity: ${({ active }) => (active === "true" ? "1" : "0.5")};
  cursor: ${({ active }) => (active === "true" ? "pointer" : "not-allowed")};
`;

export const SideBarButtonText = styled.div`
  color: white;
  font-size: 24px;
  font-weight: 700;
`;
