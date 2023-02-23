import styled from "styled-components";

export const HashtagBoxLayout = styled.div``;

export const HashtagBoxInputBox = styled.div`
  display: flex;
  gap: 10px;
  align-items: center;
`;

export const HashtagBoxText = styled.span`
  font-size: 14px;
`;

export const HashtagBoxInputWrap = styled.div`
  display: flex;
  gap: 5px;
  align-items: center;
  flex-wrap: wrap;
  width: 375px;
  border-radius: 30px;
  padding: 5px 10px;
  border: 1px solid ${({ theme }) => theme.colors.gray4};
`;
export const HashtagBoxInput = styled.input`
  width: 150px;
  padding: 5px 10px;
  border-radius: 30px;
  border: 0;

  &:focus {
    outline: none;
  }
`;

export const HashtagBoxItem = styled.div`
  font-size: 14px;
  background-color: ${({ theme }) => theme.colors.primaryPurple100};
  color: white;
  padding: 5px 10px;
  border-radius: 20px;
`;
