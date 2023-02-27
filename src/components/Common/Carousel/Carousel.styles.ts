import { Link } from "react-router-dom";
import styled from "styled-components";

export const CarouselLayout = styled.div<{ type: string }>`
  width: 100%;
  height: ${props => (props.type === "Home" ? "580px" : "394px")};
  margin: ${props => (props.type === "Home" ? "0 0 42px 0" : "80px 0 60px 0")};
  display: flex;
  justify-content: center;
  @media screen and (max-width: 1200px) {
    margin: ${props => (props.type === "Home" ? "0 0 42px 0" : "80px 20px 73px 20px")};
    width: ${props => (props.type === "Home" ? "100%" : "calc(100% - 40px);")};
  }
`;

export const CarouselRow = styled(Link)<{ type: string }>`
  position: relative;
  width: ${props => (props.type === "Home" ? "100%" : "1200px")};
  height: 100%;
  display: flex;
  overflow: hidden;
`;

export const CarouselImg = styled.img<{ order: number; stopTransition: boolean }>`
  width: 100%;
  height: 100%;
  flex-shrink: 0;
  transition: ${props => (props.stopTransition ? "none" : "transform 1s")};
  transform: translateX(calc(-100% * ${props => props.order}));
`;

export const CarouselButtonWrap = styled.div`
  position: absolute;
  top: 0;
  width: 1200px;
  height: 100%;
  margin: 0 calc((100% - 1200px) / 2);
  @media screen and (max-width: 1200px) {
    width: 100%;
    margin: 0;
  }
`;

export const CarouselButton = styled.button<{ direction: string }>`
  position: absolute;
  top: 50%;
  transform: translate(0, -50%);
  ${props => (props.direction === "left" ? "left: 40px;" : "right: 40px;")};
  font-size: 50px;
  font-weight: 600;
`;

export const CarouselListButtonBlock = styled.div`
  position: absolute;
  left: calc((100% - 84px) / 2);
  bottom: 51px;
  display: flex;
  justify-content: space-between;
  width: 84px;
  height: 18px;
`;

export const CarouselListButton = styled.button<{ active: boolean }>`
  width: 18px;
  height: 18px;
  border-radius: 50%;
  background-color: ${({ active, theme }) => (active ? theme.colors.primaryGreen100 : theme.colors.gray2)};
  :hover {
    background-color: ${({ theme }) => theme.colors.primaryGreen100};
  }
`;
