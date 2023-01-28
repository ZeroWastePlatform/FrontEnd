import Pagenation from "../../../../Common/Pagenation/Pagenation";
import { AskLayout, AskTitle, AskTopBox } from "./Ask.styles";
import { AskDataType } from "./AskContainer";
import AskList from "./AskList/AskList";
import CategoryNavigation from "./CategoryNavigation/CategoryNavigation";

interface AskProps {
  page: number;
  setPage: React.Dispatch<React.SetStateAction<number>>;
  sort: string;
  setSort: React.Dispatch<React.SetStateAction<string>>;
  askRef: React.RefObject<HTMLDivElement>;
  data: AskDataType;
}

const Ask = ({ page, setPage, sort, setSort, data: { content, totalElement, categoryElement }, askRef }: AskProps) => {
  return (
    <AskLayout ref={askRef}>
      <AskTopBox>
        <AskTitle>문의 {totalElement}</AskTitle>
        <CategoryNavigation sort={sort} setSort={setSort} counts={categoryElement} />
      </AskTopBox>
      <AskList data={content} />
      <Pagenation curpage={page} pagelist={[1, 2, 3, 4, 5]} movePage={setPage} />
    </AskLayout>
  );
};

export default Ask;
