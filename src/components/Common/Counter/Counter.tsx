import { CounterItem, CounterLayout } from "./Counter.styles";

interface CounterProps {
  count: number;
  changeCount: (type: "minus" | "plus") => void;
}

const Counter = ({ count, changeCount }: CounterProps) => {
  return (
    <CounterLayout>
      <CounterItem onClick={() => changeCount("minus")}>-</CounterItem>
      <CounterItem>{count}</CounterItem>
      <CounterItem onClick={() => changeCount("plus")}>+</CounterItem>
    </CounterLayout>
  );
};

export default Counter;
