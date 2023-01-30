import styled from "styled-components";

export const HeaderLoggedInMenuLayout = styled.div`
  position: relative;
`;

export const HeaderLoggedInMenuProfileImg = styled.img`
  background-color: #eee;
  width: 60px;
  height: 60px;
  border-radius: 100%;
  cursor: pointer;
`;

export const HeaderLoggedInMenuBox = styled.div`
  position: absolute;
  width: 168px;
  border: 1px solid ${({ theme }) => theme.colors.gray4};
  border-radius: 10px;
  margin-top: 10px;
`;

export const HeaderLoggedInMenuText = styled.span`
  display: block;
  padding: 20px 12px;
  cursor: pointer;

  &:hover {
    background-color: ${({ theme }) => theme.colors.gray1};
  }
`;
