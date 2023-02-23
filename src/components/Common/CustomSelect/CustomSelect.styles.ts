import styled from "styled-components";
import downArrowImg from "../../../assets/images/down_arrow.png";
import upArrowImg from "../../../assets/images/up_arrow.png";

export const CustomSelectBox = styled.div`
  width: 160px;
`;

export const CustomSelectLabel = styled.label<{ show: boolean }>`
  position: relative;
  cursor: pointer;
  padding-right: 10px;

  &::after {
    position: absolute;
    content: "";
    background: url(${({ show }) => (show ? upArrowImg : downArrowImg)}) no-repeat center;
    width: 15px;
    height: 15px;
    right: -15px;
    top: 50%;
    transform: translateY(-50%);
  }
`;

export const CustomSelectList = styled.ul<{ show: boolean }>`
  display: ${({ show }) => (show ? "block" : "none")};
  border: 1px solid #bdbdbe;
  border-radius: 3px;
  margin-top: 5px;
`;

export const CustomSelectItem = styled.li`
  padding: 15px 0px 15px 15px;
  color: ${({ theme }) => theme.colors.gray4};
  cursor: pointer;

  &:hover {
    color: ${({ theme }) => theme.colors.gray9};
  }
`;
