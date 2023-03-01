import { useState } from "react";

const useSortPaging = (initalPage: number, initalSort: string) => {
  const [page, setPage] = useState(initalPage);
  const [sort, setSort] = useState(initalSort);

  return {
    page,
    sort,
    setPage: (page: number) => {
      setPage(page);
    },
    setSort,
  };
};

export default useSortPaging;
