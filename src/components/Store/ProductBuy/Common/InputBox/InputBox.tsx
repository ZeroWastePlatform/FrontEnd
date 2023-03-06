import { InputBoxInput, InputBoxLayout, InputBoxTitle } from "./InputBox.styles";

interface InputBoxProps {
  title: string;
  changeHandler: () => void;
  children?: React.ReactNode;
  inputRef: React.RefObject<HTMLInputElement>;
  width?: string;
}

const InputBox = ({ title, changeHandler, children, inputRef, width }: InputBoxProps) => {
  return (
    <InputBoxLayout>
      <InputBoxTitle>{title}</InputBoxTitle>
      <InputBoxInput onChange={changeHandler} ref={inputRef} width={width} />
      {children}
    </InputBoxLayout>
  );
};

export default InputBox;
