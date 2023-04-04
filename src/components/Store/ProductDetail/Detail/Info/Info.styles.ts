import styled from "styled-components";

export const InfoLayout = styled.div`
  width: 100%;
  padding: 100px 0 0 0;
`;

export const InfoTitle = styled.div`
  font-size: 24px;
  font-weight: 700;
  margin: 0 0 40px 0;
`;

export const InfoCol = styled.div`
  position: relative;
  max-width: 1320px;
  margin: auto;
`;

export const InfoWrap = styled.div<{ fold: boolean }>`
  width: 100%;
  height: ${({ fold }) => (fold ? "800px" : "100%")};
  overflow: hidden;
`;

export const InfoImg = styled.img`
  width: 100%;
`;

export const InfoButton = styled.button`
  height: 100px;
  width: 100%;
  border: 2px solid ${({ theme }) => theme.colors.gray2};
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 10px;
  font-family: Pretendard;
  font-size: 24px;
  font-weight: 700;
  & > img {
    margin: 0 0 0 10px;
    width: 20px;
    height: 20px;
  }
`;
