import styled from "styled-components";

export const CouponPointLayout = styled.div`
  margin: 0 0 40px 0;
`;

export const CouponPointList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 30px;
`;

export const CouponPointSubBox = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

export const CouponPointInputBox = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`;

export const CouponPointsubTitle = styled.div``;

export const CouponPointInput = styled.input`
  width: 384px;
  height: 36px;
  border: 1px solid ${({ theme }) => theme.colors.gray3};
  border-radius: 3px;
  padding: 0 10px;
`;

export const CouponPointButton = styled.button<{ fill: string }>`
  width: 104px;
  height: 36px;
  border: 1px solid ${({ theme }) => theme.colors.primaryGreen100};
  color: ${({ theme, fill }) => (fill === "true" ? theme.colors.gray0 : theme.colors.primaryGreen100)};
  background-color: ${({ theme, fill }) => (fill === "true" ? theme.colors.primaryGreen100 : theme.colors.gray0)};
  border-radius: 3px;
`;

export const CouponPointText = styled.div``;
