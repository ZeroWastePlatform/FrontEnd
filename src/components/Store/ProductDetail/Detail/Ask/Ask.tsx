import { ask } from "../../../../../mock/askList";
import PagenationContainer from "../../../../Common/Pagenation/PagenationContainer";
import { AskLayout, AskTitle, AskTopBox } from "./Ask.styles";
import { AskDataType } from "./AskContainer";
import AskList from "./AskList/AskList";
import CategoryNavigation from "./CategoryNavigation/CategoryNavigation";

interface AskProps {
  page: number;
  setPage: (page: number) => void;
  sort: string;
  setSort: React.Dispatch<React.SetStateAction<string>>;
  askRef: React.RefObject<HTMLDivElement>;
  data: ask;
}

const Ask = ({
  page,
  setPage,
  sort,
  setSort,
  data: { totalPage, content, totalElement, categoryElement },
  askRef,
}: AskProps) => {
  return (
    <AskLayout ref={askRef}>
      <AskTopBox>
        <AskTitle>문의 {totalElement}</AskTitle>
        <CategoryNavigation sort={sort} setSort={setSort} setPage={setPage} counts={categoryElement} />
      </AskTopBox>
      <AskList data={content} />
      <PagenationContainer page={page} setPage={setPage} totalPage={totalPage} unit={9} />
    </AskLayout>
  );
};

export default Ask;
