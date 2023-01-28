import styled from "styled-components";

export const ProductCarouselLayout = styled.div`
  width: 100%;
  height: 300px;
  margin: 50px 0 80px 0;
`;

export const ProductCarouselButton = styled.button<{ direction: string }>`
  position: absolute;
  top: 50%;
  transform: translate(0, -50%);
  ${props => (props.direction === "left" ? "left: 10px;" : "right: 10px;")};
  font-size: 50px;
  font-weight: 600;
  background: none;
`;

export const ProductCarouselImgBox = styled.div`
  position: relative;
  max-width: 1200px;
  height: 300px;
  margin: auto;
`;

export const ProductCarouselImg = styled.img`
  width: 100%;
  height: 100%;
  margin: auto;
  background: #d9d9d9;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 40px;
  font-weight: 500;
`;
