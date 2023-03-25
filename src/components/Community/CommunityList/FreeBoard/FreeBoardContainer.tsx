import useSuspenseQuery from "../../../../hooks/useSuspenseQuery";
import { PostListType } from "../../../../types";
import Pagenation from "../../../Common/Pagenation/Pagenation";
import FreeBoard from "./FreeBoard";

const FreeBoardContainer = () => {
  const { data } = useSuspenseQuery<PostListType>(["Community", "FreeBoard"], "posts/lists/1");
  console.log(data);

  return (
    <>
      <FreeBoard posts={data.content} />
      <Pagenation page={1} pageList={[]} movePage={1} />
    </>
  );
};

export default FreeBoardContainer;
