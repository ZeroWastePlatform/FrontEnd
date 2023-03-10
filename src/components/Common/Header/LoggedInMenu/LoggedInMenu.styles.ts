import styled from "styled-components";

export const LoggedInMenuLayout = styled.div`
  position: relative;
  z-index: 5;
`;

export const LoggedInMenuProfileImg = styled.img`
  background-color: #eee;
  width: 50px;
  height: 50px;
  border-radius: 100%;
  cursor: pointer;
`;

export const LoggedInMenuBox = styled.div`
  position: absolute;
  width: 168px;
  border: 1px solid ${({ theme }) => theme.colors.gray4};
  border-radius: 10px;
  margin-top: 10px;
`;

export const LoggedInMenuText = styled.span`
  display: block;
  padding: 20px 12px;
  cursor: pointer;

  &:hover {
    background-color: ${({ theme }) => theme.colors.gray1};
  }
`;
