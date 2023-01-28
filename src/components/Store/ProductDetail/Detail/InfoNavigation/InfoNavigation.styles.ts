import styled from "styled-components";

export const InfoNavigationLayout = styled.div`
  width: 100%;
  margin: 50px 0 0 0;
  position: sticky;
  top: 0;
  z-index: 10;
  background-color: #f1f1f1;
`;

export const InfoNavigationRow = styled.div`
  display: flex;
  justify-content: space-between;
  max-width: 1160px;
  gap: 40px;
  margin: auto;
  padding: 0 20px;
`;

export const InfoNavigationItem = styled.a<{ selected: boolean }>`
  padding: 20px 60px;
  border-bottom: ${props => (props.selected ? "2px solid black" : "none")};
`;
