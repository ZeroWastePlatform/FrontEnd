import styled from "styled-components";

export const UsedMarketLayout = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`;

export const UsedMarketContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  width: 427px;
  margin-bottom: 30px;
`;

export const UsedMarketContentImg = styled.img`
  width: 100%;
  height: 427px;
  background-color: red;
  border-radius: 10px;
`;

export const UsedMarketContentTitleBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const UsedMarketContentTitle = styled.p`
  font-size: 20px;
`;

export const UsedMarketContentCategory = styled.span`
  padding: 5px 15px;
  border: 1px solid ${({ theme }) => theme.colors.primaryPurple100};
  border-radius: 20px;
  color: ${({ theme }) => theme.colors.primaryPurple100};
  font-size: 14px;
`;

export const UsedMarketContentPrice = styled.span`
  font-size: 20px;
  font-weight: 700;
`;
