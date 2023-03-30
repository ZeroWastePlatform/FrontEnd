import BuyContainer from "./Buy/BuyContainer";
import { SummaryLayout, SummaryRow } from "./Summary.styles";
import { SummaryType } from "./SummaryContainer";
import Thumnail from "./Thumnail/Thumnail";

interface SummaryProps {
  data: SummaryType;
  liked: boolean;
  changeLike: (productId: number) => Promise<void>;
}

const Summary = ({ data, liked, changeLike }: SummaryProps) => {
  return (
    <SummaryLayout>
      <SummaryRow>
        <Thumnail photo={data.thumbnail} id={data.id} />
        <BuyContainer data={data} liked={liked} changeLike={changeLike} />
      </SummaryRow>
    </SummaryLayout>
  );
};

export default Summary;
