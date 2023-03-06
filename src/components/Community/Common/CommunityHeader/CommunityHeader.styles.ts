import { Link } from "react-router-dom";
import styled from "styled-components";
import writeImg from "../../../../assets/images/write.png";

export const CommunityHeaderLayout = styled.div`
  max-width: 1320px;
  margin: 0 auto;
`;

export const CommunityHeaderTitle = styled.p`
  margin: 30px 0;
  font-size: 28px;
  font-weight: 700;
`;

export const CommunityHeaderBox = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const CommunityHeaderKeywordBox = styled.div`
  display: flex;
  gap: 20px;
  align-items: center;
`;

export const CommunityHeaderKeywordText = styled.p`
  font-weight: 700;
  font-size: 18px;
`;

export const CommunityHeaderKeywordList = styled.ul`
  display: flex;
  gap: 10px;
`;

export const CommunityHeaderKeywordItem = styled.li`
  border: 1px solid ${({ theme }) => theme.colors.primaryPurple100};
  color: ${({ theme }) => theme.colors.primaryPurple100};
  padding: 0 15px;
  height: 25px;
  line-height: 25px;
  border-radius: 20px;
`;

export const CommunityHeaderCategoryList = styled(CommunityHeaderKeywordList)``;

export const CommunityHeaderCategoryItem = styled(CommunityHeaderKeywordItem)`
  &.active {
    background-color: ${({ theme }) => theme.colors.primaryPurple100};
    color: white;
  }
`;

export const CommunityHeaderWriteAnchor = styled(Link)`
  color: ${({ theme }) => theme.colors.gray6};
  border: 1px solid ${({ theme }) => theme.colors.gray6};
  border-radius: 8px;
  padding: 0 15px;
  height: 30px;
  line-height: 30px;
`;

export const CommunityHeaderWriteImg = styled.img.attrs({
  src: writeImg,
})`
  padding-left: 3px;
`;
