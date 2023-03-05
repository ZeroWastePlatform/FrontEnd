import styled from "styled-components";
import smallLikeImg from "../../../../assets/images/small_like.png";

const textOverflow = `
  overflow: hidden;
  display: -webkit-box;
  -webkit-line-clamp: 1;
  -webkit-box-orient: vertical;
  line-height: 1.2;
`;

export const AsideLayout = styled.div`
  width: 338px;
`;

export const AsideRecommendationBox = styled.div`
  padding: 30px;
  border: 2px solid ${({ theme }) => theme.colors.gray3};
  border-radius: 10px;
`;

export const AsideTitle = styled.p`
  padding-bottom: 20px;
  border-bottom: 2px solid ${({ theme }) => theme.colors.gray3};
  font-weight: 700;
  font-size: 20px;
`;

export const AsideRecommendationPosts = styled.div``;

export const AsideRecommendationPost = styled.div`
  padding-top: 30px;
`;

export const AsideRecommendationSubject = styled.p`
  ${textOverflow}
  font-weight: 700;
  margin-bottom: 10px;
`;

export const AsideRecommendationBody = styled.span`
  ${textOverflow}
  color: ${({ theme }) => theme.colors.gray6};
`;

export const AsidePopularBox = styled(AsideRecommendationBox)`
  margin-top: 15px;
`;

export const AsidePopularPost = styled.div`
  padding-top: 30px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const AsidePopularSubject = styled.span`
  ${textOverflow}
  font-weight:700;
`;

export const AsidePopularLiked = styled.span`
  color: ${({ theme }) => theme.colors.gray5};
  position: relative;
  padding-left: 35px;

  &::after {
    position: absolute;
    content: "";
    width: 18px;
    height: 18px;
    background: url(${smallLikeImg}) no-repeat center/cover;
    left: 10px;
    top: 50%;
    margin-top: -2px;
    transform: translateY(-50%);
  }
`;
