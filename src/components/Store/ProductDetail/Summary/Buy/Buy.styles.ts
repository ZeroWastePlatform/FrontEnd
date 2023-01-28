import styled from "styled-components";

export const BuyLayout = styled.div`
  width: 500px;
`;

export const BuyBadgeList = styled.ul`
  display: flex;
  gap: 5px;
  margin: 0 0 15px 0;
`;

export const BuyBadgeItem = styled.li`
  border: 1px solid black;
  padding: 3px 10px;
  border-radius: 5px;
`;

export const BuyProductName = styled.div`
  font-size: 20px;
  margin: 0 0 10px 0;
`;
export const BuyPrice = styled.div`
  display: flex;
  justify-content: flex-end;
  font-size: 20px;
  margin: 0 0 20px 0;
`;
export const BuyInfo = styled.div`
  min-height: 300px;
  line-height: 1.6;
  font-size: 18px;
`;

export const BuyShipBox = styled.div`
  background-color: #efefef;
  border-radius: 10px;
  padding: 10px;
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

export const BuyShipText = styled.div`
  & > i {
    font-weight: 600;
  }
`;

export const BuyCounterBox = styled.div`
  margin: 20px 0;
  display: flex;
  justify-content: flex-end;
  gap: 10px;
`;

export const BuyCounterTitle = styled.div`
  font-size: 20px;
  font-weight: 500;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const BuyCounter = styled.div`
  display: flex;
`;

export const BuyCounterItem = styled.div`
  width: 25px;
  height: 25px;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px solid black;
`;

export const BuyTotalPayBox = styled.div`
  display: flex;
  justify-content: flex-end;
  font-family: Pretendard;
  font-size: 25px;
  font-weight: 500;
  line-height: 24px;
  gap: 50px;
  margin: 40px 0;
`;

export const BuyToalPayItem = styled.div``;

export const BuyButtonBox = styled.div`
  display: flex;
  font-size: 15px;
  gap: 20px;
`;

export const BuyRoundButton = styled.div`
  border-radius: 30px;
  height: 45px;
  width: 200px;
  border: 1px solid black;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const BuyCircleButton = styled.div`
  height: 45px;
  width: 45px;
  border-radius: 50%;
  border: 1px solid black;
  display: flex;
  justify-content: center;
  align-items: center;
`;
