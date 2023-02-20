import { InputBoxInput, InputBoxLayout, InputBoxTitle } from "./InputBox.styles";

interface InputBoxProps {
  title: string;
  changeHandler: () => void;
  children?: React.ReactNode;
  inputRef: React.RefObject<HTMLInputElement>;
}

const InputBox = ({ title, changeHandler, children, inputRef }: InputBoxProps) => {
  return (
    <InputBoxLayout>
      <InputBoxTitle>{title}</InputBoxTitle>
      <InputBoxInput onChange={changeHandler} ref={inputRef} />
      {children}
    </InputBoxLayout>
  );
};

export default InputBox;
