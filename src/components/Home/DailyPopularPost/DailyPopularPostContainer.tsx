import useSuspenseQuery from "../../../hooks/useSuspenseQuery";
import DailyPopularPost from "./DailyPopularPost";

export interface PostType {
  id: number;
  kind: number;
  title: string;
  nickname: string;
  content: string;
  viewCnt: number;
  replyCnt: number;
  recommendCnt: number;
  createdAt: string;
  hashtags: string[];
  thumbnailUrls: string[];
}

const DailyPopularPostContainer = () => {
  const { data } = useSuspenseQuery<PostType[]>(["Home", "DailyPopularPost"], "posts/popularity");
  return <DailyPopularPost data={data} />;
};

export default DailyPopularPostContainer;
