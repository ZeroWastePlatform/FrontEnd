import { useParams } from "react-router-dom";
import useSuspenseQuery from "../../../../../hooks/useSuspenseQuery";
import Delivery from "./Delivery";
interface DeliveryContainerProps {
  deliveryRef: React.RefObject<HTMLDivElement>;
}

const DeliveryContainer = ({ deliveryRef }: DeliveryContainerProps) => {
  const { id } = useParams();
  const { data } = useSuspenseQuery<{ deliveryFee: number }>(
    ["Store", "ProductDetail", "summary", id],
    `products/${id}`,
  );

  return <Delivery data={data} deliveryRef={deliveryRef} />;
};

export default DeliveryContainer;
