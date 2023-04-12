import styled from "styled-components";

export const BuyLayout = styled.div`
  width: calc(50% - 30px);
`;

export const BuyProductName = styled.div`
  font-size: 28px;
  font-weight: 700;
  margin: 0 0 10px 0;
`;

export const BuyPrice = styled.div`
  display: flex;
  justify-content: flex-start;
  font-size: 28px;
  font-weight: 700;
  margin: 38px 0;
  gap: 20px;
  & > i {
    color: ${({ theme }) => theme.colors.gray4};
    text-decoration: line-through;
    font-weight: 500;
  }
  & > em {
    color: ${({ theme }) => theme.colors.primaryPurple100};
  }
`;

export const BuyInfo = styled.div`
  margin-bottom: 44px;
  line-height: 1.55;
  font-size: 20px;
  font-weight: 400;
`;

export const BuyShipBox = styled.div`
  color: ${({ theme }) => theme.colors.gray5};
  display: flex;
  flex-direction: column;
  gap: 13px;
  font-size: 16px;
  font-weight: 400;
  margin: 0 0 52px 0;
  padding: 0 0 55px 0;
  border-bottom: 1px solid ${({ theme }) => theme.colors.gray2};
`;

export const BuyShipText = styled.div`
  & > i {
    font-weight: 700;
    margin-left: 14px;
  }
  & > em {
    margin: 0 17px 0 13px;
  }
  & > p {
    display: inline;
    color: ${({ theme }) => theme.colors.gray3};
  }
`;

export const BuyCounterBox = styled.div`
  margin: 20px 0;
  display: flex;
  justify-content: flex-end;
  gap: 10px;
`;

export const BuyCounterTitle = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 24px;
  font-weight: 500;
`;

export const BuyTotalPayBox = styled.div`
  display: flex;
  justify-content: flex-end;
  font-family: Pretendard;
  font-size: 24px;
  font-weight: 500;
  line-height: 24px;
  gap: 50px;
  margin: 40px 0;
`;

export const BuyToalPayItem = styled.div``;

export const BuyButtonBox = styled.div`
  display: flex;
  font-size: 15px;
  gap: 12px;
`;

export const BuyRoundButton = styled.div<{ filled: string }>`
  border-radius: 50px;
  flex-grow: 1;
  height: 70px;
  border: 1px solid black;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 24px;
  font-weight: 700;
  color: ${({ theme, filled }) => (filled === "true" ? theme.colors.gray0 : theme.colors.primaryGreen100)};
  background-color: ${({ theme, filled }) => (filled === "true" ? theme.colors.primaryGreen100 : theme.colors.gray0)};
  border: 2px solid ${({ theme }) => theme.colors.primaryGreen100};
  cursor: pointer;
`;

export const BuyCircleButton = styled.div`
  height: 70px;
  width: 70px;
  border-radius: 50%;
  border: 1px solid black;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border: 2px solid ${({ theme }) => theme.colors.gray3};
  cursor: pointer;
  font-size: 14px;
  color: #535353;
  padding-top: 7px;
`;

export const BuyCircleButtonIcon = styled.div<{ liked: string }>`
  color: ${({ liked }) => (liked === "true" ? "red" : "black")};
`;

export const BuyBadgeList = styled.ul`
  display: flex;
  gap: 12px;
  margin: 0 0 26px 0;
`;

export const BuyBadgeItem = styled.li<{ type: string }>`
  width: 83px;
  height: 36px;
  border-radius: 10px;
  background: ${({ theme, type }) => theme.colors[badgeType[type].background]};
  color: ${({ theme, type }) => theme.colors[badgeType[type].color]};
  border: 1px solid ${({ theme, type }) => theme.colors[badgeType[type].border]};
  display: flex;
  justify-content: center;
  line-height: 38px;
  font-size: 20px;
  font-weight: 400;
`;

const badgeType: { [index: string]: { background: string; color: string; border: string } } = {
  BEST: { background: "primaryPurple100", color: "gray0", border: "primaryPurple100" },
  NEW: { background: "gray0", color: "primaryGreen100", border: "primaryGreen100" },
  SALE: { background: "primaryGreen100", color: "gray0", border: "primaryGreen100" },
};
