import { Link } from "react-router-dom";
import styled from "styled-components";
import commentImg from "../../../../assets/images/comment_black.png";
import visitImg from "../../../../assets/images/visit_black.png";
import likeImg from "../../../../assets/images/small_like.png";

export const ContentBoxLayout = styled.div`
  width: 873px;
  padding-bottom: 30px;
  border-bottom: 2px solid ${({ theme }) => theme.colors.gray2};
`;

export const ContentBoxHeader = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const ContentBoxType = styled.span`
  font-weight: 700;
`;

export const ContentBoxBtns = styled.div``;

export const ContentBoxEdit = styled(Link)`
  font-size: 14px;
  color: ${({ theme }) => theme.colors.gray5};
`;

export const ContentBoxDelete = styled.button`
  font-size: 14px;
  color: ${({ theme }) => theme.colors.gray5};
`;

export const ContentBoxTitle = styled.p`
  font-size: 28px;
  font-weight: 700;
  margin-top: 20px;
`;

export const ContentBoxInfo = styled.div`
  margin-top: 40px;
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  padding-bottom: 40px;
  border-bottom: 1px solid ${({ theme }) => theme.colors.gray2};
`;

export const ContentBoxProfile = styled.div`
  display: flex;
  gap: 15px;
  align-items: center;
`;

export const ContentBoxProfileImg = styled.img`
  width: 60px;
  height: 60px;
  border-radius: 100%;
  background-color: red;
`;

export const ContentBoxProfileTextBox = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

export const ContentBoxProfileName = styled.span`
  font-weight: 700;
`;

export const ContentBoxDate = styled.span`
  color: ${({ theme }) => theme.colors.gray9};
`;

export const ContentBoxSubInfo = styled.div`
  display: flex;
  gap: 50px;
`;

export const ContentBoxComment = styled.div`
  position: relative;

  &::after {
    position: absolute;
    content: "";
    background: url(${commentImg}) no-repeat 100% center/cover;
    width: 18px;
    height: 18px;
    left: -25px;
    top: 50%;
    margin-top: -2px;
    transform: translateY(-50%);
  }
`;

export const ContentBoxVisit = styled(ContentBoxComment)`
  &::after {
    background: url(${visitImg}) no-repeat 100% center/cover;
    width: 20px;
    height: 14px;
  }
`;

export const ContentBoxLiked = styled(ContentBoxComment)`
  &::after {
    background: url(${likeImg}) no-repeat 100% center/cover;
    width: 18px;
    height: 18px;
  }
`;

export const ContentBoxBody = styled.div`
  margin: 50px 0;
  white-space: pre-line;
`;

export const ContentBoxLikeImg = styled.img`
  display: block;
  margin: 50px 0;
  margin: 0 auto;
  cursor: pointer;
`;

export const ContentBoxImg = styled.img`
  width: 100%;
`;
