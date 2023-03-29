import { useQuery } from "react-query";
import useSortPaging from "../../../../../hooks/useSortPaging";
import useSuspenseQuery from "../../../../../hooks/useSuspenseQuery";
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
  const { page, sort, setPage, setSort } = useSortPaging(1, "전체");
  const { data } = useQuery(["Store", "ProductDetal", "Review", "1", sort, page], getAsk(sort, page), {
    suspense: true,
    useErrorBoundary: true,
  });

  return <Ask page={page} setPage={setPage} sort={sort} setSort={setSort} data={data as ask} askRef={askRef} />;
};

export default AskContainer;
