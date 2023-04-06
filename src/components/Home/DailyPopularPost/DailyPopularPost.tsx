import Header from "../Common/Header/Header";
import { DailyPopularPostLayout, DailyPopularPosts } from "./DailyPopularPost.styles";
import { PostType } from "./DailyPopularPostContainer";
import Post from "./Post/Post";

interface DailyPopularPostProps {
  data: PostType[];
}

const DailyPopularPost = ({ data }: DailyPopularPostProps) => {
  return (
    <DailyPopularPostLayout>
      <Header title="오늘의 그리너스 인기글" subTitle="더보기" link={"/community/board"} />
      <DailyPopularPosts>
        {data.map(value => (
          <Post {...value} key={value.id} />
        ))}
      </DailyPopularPosts>
    </DailyPopularPostLayout>
  );
};

export default DailyPopularPost;
