import BuyContainer from "./Buy/BuyContainer";
import { SummaryLayout, SummaryRow } from "./Summary.styles";
import { SummaryType } from "./SummaryContainer";
import Thumnail from "./Thumnail/Thumnail";

interface SummaryProps {
  data: SummaryType;
}

const Summary = ({ data }: SummaryProps) => {
  return (
    <SummaryLayout>
      <SummaryRow>
        <Thumnail photos={data.thumnail} />
        <BuyContainer data={data} />
      </SummaryRow>
    </SummaryLayout>
  );
};

export default Summary;
