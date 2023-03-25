import {
  CarouselButton,
  CarouselButtonWrap,
  CarouselImg,
  CarouselLayout,
  CarouselListButton,
  CarouselListButtonBlock,
  CarouselRow,
} from "./Carousel.styles";
import leftArrow from "../../../assets/images/leftArrow.svg";
import rightArrow from "../../../assets/images/rightArrow.svg";
import { theme } from "../../../styles/theme";
import { ThemeProvider } from "styled-components";
import banner1 from "../../../assets/images/banner1.png";
import banner2 from "../../../assets/images/banner2.png";
import banner3 from "../../../assets/images/banner3.png";
import banner4 from "../../../assets/images/banner4.png";

interface CarouselProps {
  order: number;
  changeOrder: ({ direction, length, order }: { direction: string; length: number; order: number }) => void;
  checkActiveItem: (index: number) => boolean;
  setOrder: React.Dispatch<React.SetStateAction<number>>;
  type: string;
  stopTransition: boolean;
}

const Carousel = ({ order, changeOrder, type, stopTransition, checkActiveItem, setOrder }: CarouselProps) => {
  return (
    <ThemeProvider theme={theme}>
      <CarouselLayout type={type}>
        <CarouselRow type={type} to={"/store"}>
          <CarouselImg src={banner4} key={0} order={order} stopTransition={stopTransition} />
          {[banner1, banner2, banner3, banner4].map((src, index) => {
            return <CarouselImg src={src} key={index + 1} order={order} stopTransition={stopTransition} />;
          })}
          <CarouselImg src={banner1} key={5} order={order} stopTransition={stopTransition} />
          <CarouselButtonWrap>
            <CarouselButton
              direction={"left"}
              onClick={e => {
                changeOrder({ direction: "left", length: 4, order });
                e.preventDefault();
              }}
            >
              <img src={leftArrow} />
            </CarouselButton>
            <CarouselButton
              direction={"right"}
              onClick={e => {
                changeOrder({ direction: "right", length: 4, order });
                e.preventDefault();
              }}
            >
              <img src={rightArrow} />
            </CarouselButton>
            {type === "Home" ? (
              <CarouselListButtonBlock>
                {new Array(4).fill(0).map((_, index) => (
                  <CarouselListButton active={checkActiveItem(index)} key={index} onClick={() => setOrder(index + 1)} />
                ))}
              </CarouselListButtonBlock>
            ) : null}
          </CarouselButtonWrap>
        </CarouselRow>
      </CarouselLayout>
    </ThemeProvider>
  );
};

export default Carousel;
