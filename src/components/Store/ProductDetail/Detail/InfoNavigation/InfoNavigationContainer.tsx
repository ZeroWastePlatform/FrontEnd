import axios from "axios";
import { useQuery } from "react-query";
import { useParams } from "react-router-dom";
import useSuspenseQuery from "../../../../../hooks/useSuspenseQuery";
import { SummaryType } from "../../Summary/SummaryContainer";
import InfoNavigation from "./InfoNavigation";

interface InfoNavigationContainerProps {
  navigate: (type: string) => void;
  navigation: string;
}

export interface navigationDataType {
  askCount: number | null;
  reviewCount: number;
}

const InfoNavigationContainer = ({ navigate, navigation }: InfoNavigationContainerProps) => {
  const { id } = useParams();
  const { data } = useSuspenseQuery<navigationDataType>(["Store", "ProductDetail", "summary", id], `products/${id}`);

  return <InfoNavigation data={data} navigate={navigate} navigation={navigation} />;
};

export default InfoNavigationContainer;
