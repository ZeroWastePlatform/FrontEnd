import styled from "styled-components";

export const InfoNavigationLayout = styled.div`
  width: 100%;
  margin: 50px 0 0 0;
  position: sticky;
  top: 80px;
  z-index: 10;
  height: 80px;
  background-color: ${({ theme }) => theme.colors.gray1};
`;

export const InfoNavigationRow = styled.div`
  display: flex;
  justify-content: space-between;
  max-width: 1320px;
  gap: 40px;
  margin: auto;
  padding: 0 20px;

  border-top: 1px solid #d9d9d9;
  border-bottom: 1px solid #d9d9d9;
`;

export const InfoNavigationItem = styled.a<{ selected: boolean }>`
  font-size: 24px;
  font-weight: 700;
  padding: 25px 60px;
  border-bottom: ${props => (props.selected ? "4px solid black" : "none")};
  & > i {
    margin: 0 0 0 10px;
    color: #616161;
  }
`;
