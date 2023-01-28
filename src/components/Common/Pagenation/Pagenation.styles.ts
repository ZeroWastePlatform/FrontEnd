import styled from "styled-components";

export const PagenationLayout = styled.div`
  display: flex;
  justify-content: center;
  gap: 5px;
  margin: 10px 0 0 0;
`;

export const PagenationMoveButton = styled.button`
  width: 25px;
  height: 25px;
`;

export const PagenationNumberButton = styled.button<{ selected: boolean }>`
  width: 25px;
  height: 25px;
  font-weight: ${props => (props.selected ? "600" : "400")};
  color: ${props => (props.selected ? "#000000" : "#CACACA")};
`;
