import axios from "axios";
import { useQuery } from "react-query";
import InfoNavigation from "./InfoNavigation";

interface InfoNavigationContainerProps {
  navigate: (type: string) => void;
  navigation: string;
}

const InfoNavigationContainer = ({ navigate, navigation }: InfoNavigationContainerProps) => {
  const { data } = useQuery(
    ["product", "infonavigation", "1"],
    () => axios(`http://localhost:8000/infonavigation`).then(res => res.data),
    {
      suspense: true,
      useErrorBoundary: true,
    },
  );

  return <InfoNavigation data={data} navigate={navigate} navigation={navigation} />;
};

export default InfoNavigationContainer;
