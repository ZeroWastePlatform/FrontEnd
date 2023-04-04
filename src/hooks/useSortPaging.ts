import { startTransition, useState } from "react";

const useSortPaging = (initalPage: number, initalSort: string) => {
  const [page, setPage] = useState(initalPage);
  const [sort, setSort] = useState(initalSort);

  const changePage = (page: number) => {
    startTransition(() => {
      setPage(page);
    });
  };

  const changeSort = (sort: string) => {
    startTransition(() => {
      setSort(sort);
      setPage(1);
    });
  };

  return {
    page,
    sort,
    changePage,
    changeSort,
  };
};

export default useSortPaging;
