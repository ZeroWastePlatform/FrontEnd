import useSuspenseQuery from "../../../../../hooks/useSuspenseQuery";
import Delivery from "./Delivery";

export interface DeliveryDataType {
  delivery: string[];
  return: string[];
}

interface DeliveryContainerProps {
  deliveryRef: React.RefObject<HTMLDivElement>;
}

const DeliveryContainer = ({ deliveryRef }: DeliveryContainerProps) => {
  const { data } = useSuspenseQuery<DeliveryDataType>(["Store", "ProductDetail", "Delivery", "1"], "product/delivery");

  return <Delivery data={data} deliveryRef={deliveryRef} />;
};

export default DeliveryContainer;
