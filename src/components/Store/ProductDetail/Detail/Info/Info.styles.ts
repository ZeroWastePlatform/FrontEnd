import styled from "styled-components";

export const InfoLayout = styled.div`
  width: 100%;
  padding: 100px 0 0 0;
`;

export const InfoTitle = styled.div`
  font-weight: 600;
  margin: 0 0 10px 0;
`;

export const InfoCol = styled.div`
  max-width: 1200px;
  margin: auto;
`;

export const InfoImg = styled.img`
  position: relative;
  height: 1000px;
  width: 100%;
  object-fit: cover;
  background-color: #eaeaea;
  &:after {
    content: "";
    position: absolute;
    display: block;
    width: 100%;
    height: 50%;
    top: 50%;
    background: linear-gradient(to top, white, white 10%, transparent);
  }
`;

export const InfoButton = styled.div`
  height: 60px;
  border: 1px solid black;
  display: flex;
  justify-content: center;
  align-items: center;
`;
