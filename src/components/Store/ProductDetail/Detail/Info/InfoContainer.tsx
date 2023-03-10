import useSuspenseQuery from "../../../../../hooks/useSuspenseQuery";
import Info from "./Info";

export type InfoDataType = string[];

interface InfoContainerProps {
  infoRef: React.RefObject<HTMLDivElement>;
}

const InfoContainer = ({ infoRef }: InfoContainerProps) => {
  const { data } = useSuspenseQuery<InfoDataType>(["Store", "ProductDetail", "Info", "1"], "product/info");

  return <Info data={data} infoRef={infoRef} />;
};

export default InfoContainer;
