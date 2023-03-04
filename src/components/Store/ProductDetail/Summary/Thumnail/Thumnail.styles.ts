import styled from "styled-components";

export const ThumnailLayout = styled.div`
  width: calc(50% - 30px);
`;

export const ThumnailBigImgBox = styled.div`
  margin: 0 0 10px 0;
`;

export const ThumnailBigImgBlock = styled.div`
  position: relative;
  width: 100%;
  padding-bottom: 100%;
`;

export const ThumnailBigImg = styled.img`
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
`;
export const ThumnailSmallImgBox = styled.div`
  display: flex;
  gap: 5px;
`;

export const ThumnailSmallImgBlock = styled.div<{ selected: boolean }>`
  width: 100px;
  height: 100px;
  overflow: hidden;
  border: ${({ selected, theme }) => (selected ? `2px solid ${theme.colors.primaryGreen100}` : "none")};
`;

export const ThumnailSmallImg = styled.img`
  width: 100px;
  height: 100px;
  background-color: #eaeaea;
  transition: transform 0.3s;
  :hover {
    transform: scale(1.1);
  }
`;
