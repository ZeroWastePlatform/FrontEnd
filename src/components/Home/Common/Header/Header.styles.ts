import { Link } from "react-router-dom";
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

export const HeaderSubTitleDate = styled.span`
  color: ${({ theme }) => theme.colors.gray6};
  font-weight: 500;
  font-size: 20px;
`;

export const HeaderSubTitleLink = styled(Link)`
  color: #000000;
  font-weight: 700;
  font-size: 20px;
`;
