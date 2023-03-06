import styled from "styled-components";

export const PagenationLayout = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 5px;
  margin: 100px 0 0 0;
`;

export const PagenationMoveButton = styled.button<{ active: boolean }>`
  width: 25px;
  height: 25px;
  opacity: ${props => (props.active ? "1" : "0.3")};
  cursor: ${props => (props.active ? "pointer" : "not-allowed")};
  position: relative;
`;

export const PagenationNumberButton = styled.button<{ selected: boolean }>`
  width: 25px;
  height: 25px;
  font-size: 24px;
  font-weight: ${props => (props.selected ? "600" : "400")};
  color: ${props => (props.selected ? "#000000" : "#CACACA")};
  vertical-align: baseline;
  :hover {
    font-weight: 600;
    color: #000000;
  }
`;

export const PagenationMoveButtonIcon = styled.img`
  position: absolute;
  top: 7px;
  left: 1px;
  width: 25px;
  height: 15px;
`;
