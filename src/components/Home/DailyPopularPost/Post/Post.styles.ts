import styled from "styled-components";

export const PostLayout = styled.div`
  padding: 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 2px solid #d9d9d9;
`;

export const PostContent = styled.div`
  width: 60%;
`;

export const PostTitle = styled.p`
  margin-bottom: 15px;
  font-size: 20px;
  font-weight: 700;
`;

export const PostText = styled.span`
  overflow: hidden;
  white-space: normal;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  line-height: 1.2;
  margin-bottom: 15px;
`;

export const PostSubInfo = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`;

export const PostUserImg = styled.img`
  width: 30px;
  height: 30px;
  border-radius: 100%;
  background-color: #eee;
`;

export const PostUserName = styled.span``;

export const PostDate = styled.span``;

export const PostCommentNum = styled.span``;

export const PostImg = styled.img`
  width: 203px;
  height: 168px;
  border-radius: 10px;
  background-color: #eee;
`;
