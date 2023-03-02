import styled from "styled-components";

export const BuyInfoBoxLayout = styled.div`
  border: 1px solid #d3d3d4;
  width: 451px;
  height: 356px;
  padding: 45px;
  border-radius: 10px;
  margin: 0 0 15px 0;
`;

export const BuyInfoBoxCol = styled.div<{ margin: string }>`
  display: flex;
  justify-content: space-between;
  margin-bottom: ${props => props.margin};
`;

export const BuyInfoBoldText = styled.div`
  font-size: 24px;
  font-weight: 700;
  i {
    color: #66f095;
  }
`;

export const BuyInfosubTitleText = styled.div`
  font-size: 20px;
  font-weight: 500;
  color: #646667;
`;

export const BuyInfoPriceText = styled.div<{ bold?: boolean }>`
  font-size: 20px;
  font-weight: ${props => (props.bold ? 700 : 500)};
  color: ${props => (props.bold ? "#252525" : "#646667")};
`;

export const BuyInfoNormalText = styled.div<{ bold?: boolean }>`
  i {
    color: #66f095;
  }
`;
