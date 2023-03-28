import { useParams } from "react-router-dom";
import useSuspenseQuery from "../../../../../hooks/useSuspenseQuery";
import Info from "./Info";

export interface InfoDataType {
  id: string;
  author: string;
  width: number;
  height: number;
  url: string;
  download_url: string;
}

interface InfoContainerProps {
  infoRef: React.RefObject<HTMLDivElement>;
}

const InfoContainer = ({ infoRef }: InfoContainerProps) => {
  const { id } = useParams();
  const { data } = useSuspenseQuery<InfoDataType[]>(
    ["Store", "ProductDetail", "Info", "1"],
    "product/info",
    undefined,
    undefined,
    `https://picsum.photos/v2/list?page=${id}&limit=5`,
  );

  return <Info data={data} infoRef={infoRef} />;
};

export default InfoContainer;
