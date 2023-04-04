import { useQuery } from "react-query";
import useSortPaging from "../../../../../hooks/useSortPaging";
import getAsk, { ask } from "../../../../../mock/askList";
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
  const { page, sort, changePage, changeSort } = useSortPaging(1, "전체");
  const { data } = useQuery(["Store", "ProductDetal", "Review", "1", sort, page], getAsk(sort, page), {
    suspense: true,
    useErrorBoundary: true,
  });

  return (
    <Ask page={page} changePage={changePage} sort={sort} changeSort={changeSort} data={data as ask} askRef={askRef} />
  );
};

export default AskContainer;
