import { AskDataContentType } from "../AskContainer";
import AskItem from "./AskItem/AskItem";
import { AskListLayout } from "./AskList.styles";

interface AskListProps {
  data: AskDataContentType[];
}

const AskList = ({ data }: AskListProps) => {
  return (
    <AskListLayout>
      {data.map((el, index) => (
        <AskItem data={el} key={index} />
      ))}
    </AskListLayout>
  );
};

export default AskList;
