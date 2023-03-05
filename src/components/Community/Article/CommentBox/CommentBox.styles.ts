import styled from "styled-components";

export const CommentBoxLayout = styled.div`
  margin-top: 40px;
`;
export const CommentBoxTotal = styled.div`
  display: flex;
  gap: 10px;
`;
export const CommentBoxTotalText = styled.span`
  font-weight: 700;
  font-size: 22px;
`;
export const CommentBoxTotalNum = styled(CommentBoxTotalText)`
  color: ${({ theme }) => theme.colors.primaryGreen100};
`;
export const CommentBoxInputBox = styled.div`
  margin-top: 30px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
export const CommentBoxMyProfileImg = styled.img`
  width: 40px;
  height: 40px;
  background-color: red;
  border-radius: 100%;
`;
export const CommentBoxInput = styled.input`
  width: 716px;
  height: 50px;
  border: 2px solid ${({ theme }) => theme.colors.gray3};
  border-radius: 10px;
  padding: 0 10px;
`;
export const CommentBoxButton = styled.button`
  width: 87px;
  height: 50px;
  color: white;
  background-color: ${({ theme }) => theme.colors.primaryGreen100};
  border: 0;
  border-radius: 10px;
  font-size: 18px;
`;
export const CommentBoxComments = styled.div`
  margin-top: 30px;
`;
