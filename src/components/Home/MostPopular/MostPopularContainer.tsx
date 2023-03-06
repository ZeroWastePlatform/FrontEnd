import React from "react";
import { getCategoryList } from "../../../utils/getCategoryList";
import MostPopular from "./MostPopular";

const MostPopularContainer = () => {
  const categoryList = getCategoryList();
  return <MostPopular categoryList={categoryList} />;
};

export default MostPopularContainer;
