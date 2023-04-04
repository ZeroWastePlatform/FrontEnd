import styled from "styled-components";

export const CounterLayout = styled.div`
  display: flex;
  background-color: white;
`;

export const CounterItem = styled.div`
  width: 39px;
  height: 39px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 20px;
  border: 1px solid #c8c8c8;
  & + & {
    border-left: none;
  }
`;
