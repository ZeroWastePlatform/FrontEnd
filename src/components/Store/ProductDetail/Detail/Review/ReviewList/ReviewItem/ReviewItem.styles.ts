import styled from "styled-components";

export const ReviewItemLayout = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  padding: 20px 0;
  border-bottom: 1px solid #eaeaea;
`;

export const ReviewItemTopBox = styled.div`
  display: flex;
  gap: 10px;
`;

export const ReviewItemUserAvatar = styled.img`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background-color: #eaeaea;
`;

export const ReviewItemTopLeftBox = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
`;

export const ReviewItemUserNickname = styled.div`
  font-weight: 600;
`;

export const ReviewItemTopLeftBottomBox = styled.div`
  display: flex;
  gap: 10px;
`;

export const ReviewItemRate = styled.div``;

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
  border: 1px solid #797979;
  background-color: ${props => (props.selected ? "#797979" : "white")};
  color: ${props => (props.selected ? "white" : "black")};
`;

export const ReviewItemLikeCount = styled.div`
  & > i {
    font-weight: 600;
  }
`;

export const ReviewItemContent = styled.div`
  padding: 0 0 0 50px;
  overflow: hidden;
  text-overflow: ellipsis;
  line-height: 1.6;
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
`;

export const ReviewItemImgList = styled.div`
  padding: 0 0 0 50px;
  display: flex;
  gap: 10px;
`;

export const ReviewItemImg = styled.img`
  width: 100px;
  height: 100px;
  background-color: #eaeaea;
`;
