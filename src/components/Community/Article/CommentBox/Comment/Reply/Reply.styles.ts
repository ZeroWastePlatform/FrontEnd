import styled from "styled-components";

export const ReplyLayout = styled.div`
  padding: 20px 20px;
  margin-top: 10px;
  display: flex;
  gap: 15px;
  background-color: ${({ theme }) => theme.colors.gray1};
  border-radius: 10px;
`;

export const ReplyUserProfileBox = styled.div``;

export const ReplyUserProfile = styled.img`
  width: 40px;
  height: 40px;
  border-radius: 100%;
  background-color: red;
`;

export const ReplyBox = styled.div`
  display: flex;
  gap: 10px;
  flex-direction: column;
`;

export const ReplyUserName = styled.span`
  font-weight: 700;
`;

export const ReplyContent = styled.div``;

export const ReplyActions = styled.div`
  display: flex;
  gap: 15px;
`;

export const ReplyButton = styled.button`
  border: 0;
  background: transparent;
  padding: 0;
  color: ${({ theme }) => theme.colors.gray4};
`;

export const ReplyEditInput = styled.input`
  width: 400px;
  height: 30px;
  border-radius: 10px;
  border: 2px solid #bdbdbe;
  padding-left: 10px;
`;

export const ReplyEditBtns = styled.div`
  display: flex;
  gap: 15px;
  width: 600px;
`;
