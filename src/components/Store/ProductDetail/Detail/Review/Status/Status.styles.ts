import styled from "styled-components";

export const StatusLayout = styled.div`
  max-width: 1120px;
  height: 260px;
  display: flex;
  background-color: ${({ theme }) => theme.colors.primaryGreen10};
  margin: 0 auto 88px auto;
  border-radius: 10px;
  padding: 30px;
`;

export const StatusStarBox = styled.div`
  width: 520px;
  height: 200px;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  gap: 14px;
  border-right: 2px solid #cfcfcf;
`;

export const StatusStarBase = styled.div`
  z-index: 0;
  padding: 0;
`;

export const StatusStarFill = styled.div<{ width: number }>`
  background-color: ${({ theme }) => theme.colors.primaryGreen10};
  width: 140px;
  position: absolute;
  top: 0;
  right: calc(220px - ${({ width }) => width}px);
  bottom: 0;
  z-index: 1;
  transition: all 0.3s ease-in-out;
  mix-blend-mode: color;
`;

export const StatusStarNum = styled.div`
  font-size: 36px;
  font-weight: 700;
`;

export const StatusGraphBox = styled.div`
  width: 520px;
  height: 200px;
  display: flex;
  justify-content: center;
  flex-direction: column;
  gap: 20px;
  padding-left: 61px;
`;

export const StatusGraphRow = styled.div`
  display: flex;
  align-items: center;
  gap: 25px;
  font-size: 24px;
  font-weight: 700;
`;

export const StatusGraphText = styled.div`
  width: 36px;
`;

export const StatusGraphLineBox = styled.div`
  position: relative;
`;

export const StatusGraphLineBase = styled.div`
  width: 262px;
  height: 6px;
  background-color: ${({ theme }) => theme.colors.gray3};
`;

export const StatusGraphLineFill = styled.div<{ width: string }>`
  position: absolute;
  top: 0;
  left: 0;
  width: 100px;
  height: 6px;
  background-color: ${({ theme }) => theme.colors.primaryGreen100};
  width: ${props => props.width}%;
`;
