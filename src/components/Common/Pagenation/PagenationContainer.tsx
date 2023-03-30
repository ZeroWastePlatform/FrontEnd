import Pagenation from "./Pagenation";

interface PagenationContainerProps {
  page: number;
  totalPage: number;
  unit: number;
  changePage: (page: number) => void;
}

const PagenationContainer = ({ page, changePage, totalPage, unit }: PagenationContainerProps) => {
  const makePageList = () => {
    const unitPage = Math.ceil(page / unit);
    const startPage = (unitPage - 1) * unit + 1;
    const list = new Array(unit)
      .fill(0)
      .map((_, index) => index + startPage)
      .filter(page => page <= totalPage);
    return list;
  };

  const checkMoveLeft = () => {
    const unitPage = Math.ceil(page / unit);
    if (unitPage === 1) return false;
    return true;
  };

  const checkMoveRight = () => {
    const unitPage = Math.ceil(page / unit);
    if (unitPage * unit + 1 <= totalPage) return true;
    return false;
  };

  return (
    <Pagenation
      page={page}
      moveLeft={checkMoveLeft()}
      moveRight={checkMoveRight()}
      pageList={makePageList()}
      changePage={changePage}
    ></Pagenation>
  );
};

export default PagenationContainer;
