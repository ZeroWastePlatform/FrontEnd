import useSortPaging from "../../../../../hooks/useSortPaging";
import useSuspenseQuery from "../../../../../hooks/useSuspenseQuery";
import Ask from "./Ask";

export interface AskDataContentType {
  id: number;
  title: string;
  category: string;
  nickname: string;
  date: string;
  content: string;
  answer: string;
  secret: boolean;
  answered: boolean;
}

export interface AskDataType {
  totalElement: number;
  totalPage: number;
  categoryElement: number[];
  content: AskDataContentType[];
}

interface AskContainerProps {
  askRef: React.RefObject<HTMLDivElement>;
}

const AskContainer = ({ askRef }: AskContainerProps) => {
  const { page, sort, setPage, setSort } = useSortPaging(1, "베스트순");
  const { data } = useSuspenseQuery<AskDataType>(
    ["Store", "ProductDetal", "Ask", "1", sort, page],
    `product/ask?sort=${sort}&page=${page}`,
  );

  return <Ask page={page} setPage={setPage} sort={sort} setSort={setSort} data={data} askRef={askRef} />;
};

export default AskContainer;
