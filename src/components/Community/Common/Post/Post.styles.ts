import styled from "styled-components";
import commentImg from "../../../../assets/images/comment.png";
import likeImg from "../../../../assets/images/like.png";
import visitImg from "../../../../assets/images/visit.png";

export const PostContent = styled.div`
  width: 50%;
  flex-direction: column;
  padding: 30px 15px;
  border-right: 1px solid #e8e8e8;
  border-bottom: 1px solid #e8e8e8;
  cursor: pointer;
`;

export const PostContentSubTitle = styled.p`
  display: inline-block;
  color: white;
  background-color: ${({ theme }) => theme.colors.primaryGreen100};
  border-radius: 20px;
  padding: 0 15px;
  height: 30px;
  line-height: 30px;
`;

export const PostContentMainBox = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const PostContentMain = styled.div`
  width: 80%;
`;

export const PostContentMainImg = styled.img`
  width: 100px;
  height: 100px;
`;

export const PostContentTitle = styled.p`
  margin-top: 15px;
  color: ${({ theme }) => theme.colors.gray9};
  font-size: 22px;
  font-weight: 700;
  overflow: hidden;
  white-space: normal;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 1;
  -webkit-box-orient: vertical;
  line-height: 1.2;
`;

export const PostContentBody = styled.div`
  margin-top: 15px;
  overflow: hidden;
  white-space: normal;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  line-height: 1.2;
`;

export const PostContentKeywordList = styled.ul`
  margin-top: 15px;
  display: flex;
  gap: 10px;
`;

export const PostContentKeywordItem = styled.li`
  font-size: 14px;
  color: ${({ theme }) => theme.colors.primaryPurple100};
  border: 1px solid ${({ theme }) => theme.colors.primaryPurple100};
  border-radius: 20px;
  padding: 5px 15px;
`;

export const PostContentSubInfo = styled.div`
  margin-top: 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const PostContentSubInfoLeft = styled.div`
  display: flex;
  gap: 20px;
  align-items: center;
`;

export const PostContentSubInfoProfileImg = styled.img`
  width: 38px;
  height: 38px;
  border-radius: 100%;
  background-color: blue;
`;

export const PostContentSubInfoProfileName = styled.span`
  font-weight: 700;
`;

export const PostContentSubInfoDate = styled.span`
  color: ${({ theme }) => theme.colors.gray5};
`;

export const PostContentSubInfoRight = styled.div`
  display: flex;
  gap: 50px;
`;

export const PostContentSubInfoComments = styled.div`
  position: relative;
  color: ${({ theme }) => theme.colors.gray5};

  &::after {
    position: absolute;
    content: "";
    width: 20px;
    height: 20px;
    left: -25px;
    top: 50%;
    margin-top: -2px;
    transform: translateY(-50%);
    background: url(${commentImg}) no-repeat center;
  }
`;
export const PostContentSubInfoLiked = styled(PostContentSubInfoComments)`
  &::after {
    background: url(${likeImg}) no-repeat center;
  }
`;
export const PostContentSubInfoVisit = styled(PostContentSubInfoComments)`
  &::after {
    background: url(${visitImg}) no-repeat center;
  }
`;
