import useSuspenseQuery from "../../../../hooks/useSuspenseQuery";
import { PostListType } from "../../../../types";
import FreeBoard from "./FreeBoard";

const FreeBoardContainer = () => {
  const { data } = useSuspenseQuery<PostListType>(["Community", "FreeBoard"], "posts/lists/1");
  console.log(data);

  return <FreeBoard posts={data.content} />;
};

export default FreeBoardContainer;
