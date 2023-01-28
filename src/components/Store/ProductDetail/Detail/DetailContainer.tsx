import Detail from "./Detail";
import useDetail from "./DetailHook";

const DetailContainer = () => {
  const { refs, navigate, navigation } = useDetail();

  return <Detail refs={refs} navigation={navigation} navigate={navigate} />;
};

export default DetailContainer;
