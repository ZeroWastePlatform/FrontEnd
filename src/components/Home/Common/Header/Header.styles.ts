import styled from "styled-components";

export const HeaderLayout = styled.div`
  max-width: 1320px;
  margin: 0 auto;
  margin-bottom: 50px;
`;

export const HeaderTitleBox = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 15px 0;
  border-bottom: 2px solid #d9d9d9;
  margin-bottom: 30px;
`;

export const HeaderTitle = styled.p`
  font-weight: 700;
  font-size: 24px;
`;

export const HeaderSubTitle = styled.span<{ light: boolean }>`
  color: ${({ light, theme }) => (light ? theme.colors.gray6 : "#000000")};
  font-weight: ${({ light }) => (light ? "500" : "700")};
  font-size: 20px;
`;
