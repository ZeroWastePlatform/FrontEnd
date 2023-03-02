import useSuspenseQuery from "../../../../hooks/useSuspenseQuery";
import Summary from "./Summary";

export interface SummaryType {
  thumnail: string[];
  category: string;
  badges: string[];
  brand: string;
  title: string;
  price: number;
  summary: string;
  options: string[];
  liked: string;
}

interface SummaryContainerProps {
  setCondition: React.Dispatch<
    React.SetStateAction<{
      category?: string | undefined;
    }>
  >;
}

const SummaryContainer = ({ setCondition }: SummaryContainerProps) => {
  const { data } = useSuspenseQuery<SummaryType>(["Store", "ProductDetail", "summary", "1"], "summary", e =>
    setCondition({ category: e.category }),
  );

  return <Summary data={data} />;
};

export default SummaryContainer;
