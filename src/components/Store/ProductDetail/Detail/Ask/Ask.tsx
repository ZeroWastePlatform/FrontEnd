import { ask } from "../../../../../mock/askList";
import PagenationContainer from "../../../../Common/Pagenation/PagenationContainer";
import { AskLayout, AskTitle, AskTopBox } from "./Ask.styles";
import AskList from "./AskList/AskList";
import CategoryNavigation from "./CategoryNavigation/CategoryNavigation";

interface AskProps {
  data: ask;
  sort: string;
  page: number;
  changeSort: (sort: string) => void;
  changePage: (page: number) => void;
  askRef: React.RefObject<HTMLDivElement>;
}

const Ask = ({
  data: { totalPage, content, totalElement, categoryElement },
  sort,
  page,
  changeSort,
  changePage,
  askRef,
}: AskProps) => {
  return (
    <AskLayout ref={askRef}>
      <AskTopBox>
        <AskTitle>문의 {totalElement}</AskTitle>
        <CategoryNavigation sort={sort} changeSort={changeSort} counts={categoryElement} />
      </AskTopBox>
      <AskList data={content} />
      <PagenationContainer page={page} changePage={changePage} totalPage={totalPage} unit={9} />
    </AskLayout>
  );
};

export default Ask;
