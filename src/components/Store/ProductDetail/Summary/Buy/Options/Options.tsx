import {
  Icon,
  OprionsSelectWrapper,
  OptionsLayout,
  OptionsSelectProductBottomBox,
  OptionsSelectProductBox,
  OptionsSelectProductCountBox,
  OptionsSelectProductDeleteImage,
  OptionsSelectProductPrice,
  OptionsSelectProductTitle,
  OptionsSelectProductTopBox,
  OptionsSelectWrap,
  OptionsTitle,
  OptionsTotalPrice,
  OptionsTotalPriceBox,
  OptionsTotalPriceTitle,
} from "./Options.styles";
import arrow from "../../../../../../assets/images/downArrow.svg";
import deleteImg from "../../../../../../assets/images/delete.svg";
import Counter from "../../../../../Common/Counter/Counter";
import { numberWithCommas } from "../../../../../../utils/priceProcess";

interface OptionsProps {
  title: string;
  require: { title: string; price: number }[];
  bonus: { title: string; price: number }[];
  selectOption: (value: string) => void;
  deleteOption: (value: string) => void;
  selectedOptions: { title: string; price: number; count: number }[];
  changeCount: (index: number) => (type: "minus" | "plus") => void;
  totalPrice: number;
}

const Options = ({
  title,
  require,
  bonus,
  selectOption,
  deleteOption,
  selectedOptions,
  changeCount,
  totalPrice,
}: OptionsProps) => {
  return (
    <OptionsLayout>
      <OptionsTitle>옵션 선택</OptionsTitle>
      <OprionsSelectWrapper>
        <OptionsSelectWrap require="true" onChange={e => selectOption(e.target.value)}>
          <option value="default" selected disabled>
            필수 옵션
          </option>
          {require.length !== 0 ? (
            require.map(value => {
              return (
                <option value={value.title} key={value.title}>
                  {value.title + value.price}
                </option>
              );
            })
          ) : (
            <option>{title}</option>
          )}
        </OptionsSelectWrap>
        <Icon src={arrow} />
      </OprionsSelectWrapper>
      {bonus.length !== 0 ? (
        <OprionsSelectWrapper>
          <OptionsSelectWrap require="false" onChange={e => selectOption(e.target.value)}>
            <option value="default" selected disabled>
              추가상품 (선택)
            </option>
            {bonus.map(value => {
              return (
                <option value={value.title} key={value.title}>
                  {value.title + value.price}
                </option>
              );
            })}
          </OptionsSelectWrap>
          <Icon src={arrow} />
        </OprionsSelectWrapper>
      ) : null}
      {selectedOptions.map(({ title, price, count }, index) => {
        return (
          <OptionsSelectProductBox key={title}>
            <OptionsSelectProductTopBox>
              <OptionsSelectProductTitle>{title}</OptionsSelectProductTitle>
              <OptionsSelectProductDeleteImage src={deleteImg} onClick={() => deleteOption(title)} />
            </OptionsSelectProductTopBox>
            <OptionsSelectProductBottomBox>
              <OptionsSelectProductCountBox>
                <div>수량</div>
                <Counter count={count} changeCount={changeCount(index)} />
              </OptionsSelectProductCountBox>
              <OptionsSelectProductPrice>{numberWithCommas(price)}원</OptionsSelectProductPrice>
            </OptionsSelectProductBottomBox>
          </OptionsSelectProductBox>
        );
      })}
      <OptionsTotalPriceBox>
        <OptionsTotalPriceTitle>주문금액</OptionsTotalPriceTitle>
        <OptionsTotalPrice>{numberWithCommas(totalPrice)}원</OptionsTotalPrice>
      </OptionsTotalPriceBox>
    </OptionsLayout>
  );
};

export default Options;
