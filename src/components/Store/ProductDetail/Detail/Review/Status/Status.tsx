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
} from "./Status.styles";

interface StatusProps {
  avgrate: number;
  rates: number[];
  total: number;
}

const Status = ({ avgrate, rates, total }: StatusProps) => {
  return (
    <StatusLayout>
      <StatusStarBox>
        <StatusStarBase>★★★★★</StatusStarBase>
        <StatusStarFill width={avgrate * 0.2}>★★★★★</StatusStarFill>
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
