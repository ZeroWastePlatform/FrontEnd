import styled from "styled-components";

export const ReviewItemLayout = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  padding: 40px 0;
  border-bottom: 1px solid #eaeaea;
  font-size: 20px;
  font-weight: 400;
`;

export const ReviewItemTopBox = styled.div`
  display: flex;
  gap: 16.5px;
`;

export const ReviewItemUserAvatar = styled.img`
  width: 66px;
  height: 66px;
  border-radius: 50%;
  background-color: #eaeaea;
`;

export const ReviewItemTopLeftBox = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

export const ReviewItemUserNickname = styled.div`
  font-size: 24px;
  font-weight: 700;
`;

export const ReviewItemTopLeftBottomBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
`;

export const ReviewItemRate = styled.div`
  display: flex;
`;

export const ReviewItemDate = styled.div``;

export const ReviewItemTopRightBox = styled.div`
  display: flex;
  margin-left: auto;
  align-items: center;
  gap: 10px;
`;

export const ReviewItemLikeButton = styled.button<{ selected: boolean }>`
  border-radius: 10px;
  padding: 7px 10px;
  background-color: ${props => (props.selected ? props.theme.colors.primaryGreen100 : props.theme.colors.gray3)};
  color: ${props => props.theme.colors.gray0};
`;

export const ReviewItemLikeCount = styled.div`
  & > i {
    font-weight: 600;
  }
`;

export const ReviewItemContent = styled.div`
  padding: 0 0 0 86px;
  overflow: hidden;
  text-overflow: ellipsis;
  line-height: 1.6;
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
`;

export const ReviewItemImgList = styled.div`
  padding: 0 0 0 86px;
  display: flex;
  gap: 10px;
`;

export const ReviewItemImg = styled.img`
  width: 100px;
  height: 100px;
  background-color: #eaeaea;
`;
