import styled from "styled-components";
import commentImg from "../../../../assets/images/comment.svg";
import likeImg from "../../../../assets/images/like.svg";
import visitImg from "../../../../assets/images/views.svg";
import profile from "../../../../assets/images/profile1.png";
import thumbnail from "../../../../assets/images/thumbnail1.png";

export const PostLayout = styled.div`
  padding: 28px 0 25px 0;
  display: flex;
  gap: 20px;
  border-bottom: 2px solid #d9d9d9;
`;

export const PostCategory = styled.div`
  font-size: 16px;
  color: ${({ theme }) => theme.colors.gray4};
  margin: 0 0 5px 0;
`;

export const PostMainBox = styled.div`
  width: calc(1320px - 260px);
  display: flex;
  flex-direction: column;
`;

export const PostTitle = styled.p`
  margin-bottom: 15px;
  font-size: 20px;
  font-weight: 700;
`;

export const PostContent = styled.span`
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
  margin: auto 0 0 0;
`;

export const PostUserImg = styled.img`
  width: 30px;
  height: 30px;
  border-radius: 100%;
  background: url(${profile}) no-repeat center;
`;

export const PostUserName = styled.span`
  font-size: 16px;
  font-weight: 700;
`;

export const PostDate = styled.span`
  font-size: 16px;
  font-weight: 400;
  color: ${({ theme }) => theme.colors.gray5};
`;

export const PostHashtagBox = styled.ul`
  display: flex;
  gap: 10px;
  margin: 0 0 0 10px;
`;

export const PostHashtag = styled.li`
  color: ${({ theme }) => theme.colors.primaryPurple100};
  border: 1px solid ${({ theme }) => theme.colors.primaryPurple100};
  border-radius: 20px;
  padding: 5px 10px 2px 10px;
  line-height: 1.2;
`;

export const PostCntBox = styled.div`
  width: 200px;
  display: flex;
  gap: 40px;
  margin: 0 0 0 auto;
`;

const IconCnt = styled.div`
  position: relative;
  color: ${({ theme }) => theme.colors.gray5};

  &::after {
    position: absolute;
    content: "";
    width: 29px;
    height: 29px;
    left: -30px;
    top: 50%;
    margin-top: -2px;
    transform: translateY(-50%);
  }
`;

export const PostCommentCnt = styled(IconCnt)`
  &::after {
    background: url(${commentImg}) no-repeat center;
  }
`;

export const PostLikeCnt = styled(IconCnt)`
  &::after {
    background: url(${likeImg}) no-repeat center;
  }
`;

export const PostViewCnt = styled(IconCnt)`
  &::after {
    background: url(${visitImg}) no-repeat center;
  }
`;

export const PostImg = styled.img`
  width: 240px;
  height: 160px;
  border-radius: 10px;
  background: url(${thumbnail}) no-repeat center;
`;
