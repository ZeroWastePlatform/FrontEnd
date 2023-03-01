import {
  StatusGraphBox,
  StatusGraphLineBase,
  StatusGraphLineBox,
  StatusGraphLineFill,
  StatusGraphRow,
  StatusGraphText,
  StatusLayout,
  StatusStarBase,
  StatusStarBox,
  StatusStarFill,
  StatusStarNum,
} from "./Status.styles";
import starImg from "../../../../../../assets/images/star.svg";
interface StatusProps {
  avgrate: number;
  rates: number[];
  total: number;
}

const Status = ({ avgrate, rates, total }: StatusProps) => {
  return (
    <StatusLayout>
      <StatusStarBox>
        <StatusStarBase>
          <img src={starImg}></img>
          <img src={starImg}></img>
          <img src={starImg}></img>
          <img src={starImg}></img>
          <img src={starImg}></img>
        </StatusStarBase>
        <StatusStarFill width={(140 * avgrate) / 5} />
        <StatusStarNum>{avgrate}</StatusStarNum>
      </StatusStarBox>
      <StatusGraphBox>
        {rates.map((rate, index) => (
          <StatusGraphRow key={index}>
            <StatusGraphText>{5 - index}점</StatusGraphText>
            <StatusGraphLineBox>
              <StatusGraphLineBase></StatusGraphLineBase>
              <StatusGraphLineFill width={((rate * 100) / total).toString()}></StatusGraphLineFill>
            </StatusGraphLineBox>
            <StatusGraphText>{rate}</StatusGraphText>
          </StatusGraphRow>
        ))}
      </StatusGraphBox>
    </StatusLayout>
  );
};

export default Status;
