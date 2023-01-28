import styled from "styled-components";

export const StatusLayout = styled.div`
  max-width: 1000px;
  height: 200px;
  display: flex;
  background-color: #eaeaea;
  margin: 0 auto 50px auto;
  border-radius: 10px;
  padding: 30px;
`;

export const StatusStarBox = styled.div`
  width: 500px;
  height: 200px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-right: 1px solid black;
  color: #aaa9a9;
  position: relative;
  unicode-bidi: bidi-override;
  -webkit-text-fill-color: transparent;
  -webkit-text-stroke-width: 1.3px;
  -webkit-text-stroke-color: #2b2a29;
  font-size: 50px;
`;

export const StatusStarBase = styled.div`
  z-index: 0;
  padding: 0;
`;

export const StatusStarFill = styled.div<{ width: number }>`
  width: ${props => 216.25 * props.width}px;
  position: absolute;
  left: 142.125px;
  color: #fff58c;
  z-index: 1;
  overflow: hidden;
  -webkit-text-fill-color: black;
`;

export const StatusGraphBox = styled.div`
  width: 450px;
  height: 200px;
  display: flex;
  justify-content: center;
  flex-direction: column;
  padding-left: 50px;
  gap: 20px;
`;

export const StatusGraphRow = styled.div`
  display: flex;
  gap: 10px;
`;

export const StatusGraphText = styled.div``;

export const StatusGraphLineBox = styled.div`
  position: relative;
`;

export const StatusGraphLineBase = styled.div`
  width: 350px;
  height: 10px;
  background-color: white;
`;

export const StatusGraphLineFill = styled.div<{ width: string }>`
  position: absolute;
  top: 0;
  left: 0;
  width: 100px;
  height: 10px;
  background-color: black;
  width: ${props => props.width}%;
`;
