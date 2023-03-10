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

interface CarouselProps {
  data: string[];
  order: number;
  changeOrder: ({ direction, length, order }: { direction: string; length: number; order: number }) => void;
  checkActiveItem: (index: number) => boolean;
  setOrder: React.Dispatch<React.SetStateAction<number>>;
  type: string;
  stopTransition: boolean;
}

const Carousel = ({ data, order, changeOrder, type, stopTransition, checkActiveItem, setOrder }: CarouselProps) => {
  return (
    <ThemeProvider theme={theme}>
      <CarouselLayout type={type}>
        <CarouselRow type={type} to={"/store"}>
          {/*TO-DO : 주소를 적절한 종류로 교체하기*/}
          <CarouselImg
            src={`https://zerowasteproduct.herokuapp.com${data?.[data?.length - 1]}`}
            key={0}
            order={order}
            stopTransition={stopTransition}
          />
          {data?.map((_, index) => {
            return (
              <CarouselImg
                src={`https://zerowasteproduct.herokuapp.com${data?.[index]}`}
                key={index + 1}
                order={order}
                stopTransition={stopTransition}
              />
            );
          })}
          <CarouselImg
            src={`https://zerowasteproduct.herokuapp.com${data?.[0]}`}
            key={5}
            order={order}
            stopTransition={stopTransition}
          />
          <CarouselButtonWrap>
            <CarouselButton
              direction={"left"}
              onClick={e => {
                changeOrder({ direction: "left", length: data.length, order });
                e.preventDefault();
              }}
            >
              <img src={leftArrow} />
            </CarouselButton>
            <CarouselButton
              direction={"right"}
              onClick={e => {
                changeOrder({ direction: "right", length: data?.length, order });
                e.preventDefault();
              }}
            >
              <img src={rightArrow} />
            </CarouselButton>
            {type === "Home" ? (
              <CarouselListButtonBlock>
                {new Array(data?.length).fill(0).map((_, index) => (
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
