import styled from "styled-components";

export const WriteLayout = styled.div`
  max-width: 1320px;
  margin: 0 auto;
  margin-top: 60px;
`;

export const WriteMenu = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 50px;
`;

export const WriteBtnBox = styled.div`
  display: flex;
  gap: 10px;
`;

export const WriteTempDataBtn = styled.button`
  border: 1px solid ${({ theme }) => theme.colors.gray4};
  background-color: white;
  border-radius: 20px;
  padding: 8px 15px;
`;

export const WriteRegistBtn = styled.button`
  background-color: ${({ theme }) => theme.colors.primaryGreen100};
  color: white;
  border-radius: 20px;
  border: 0;
  padding: 8px 15px;
`;

export const WriteSubjectInput = styled.input`
  width: 100%;
  height: 40px;
  border: 0;
  border-bottom: 1px solid ${({ theme }) => theme.colors.gray2};
  color: ${({ theme }) => theme.colors.gray4};
  font-size: 24px;

  &::placeholder {
    color: ${({ theme }) => theme.colors.gray4};
  }
  &:focus {
    outline: none;
  }
`;

export const WriteContent = styled.textarea`
  width: 100%;
  height: 50vh;
  border: 0;
  margin-top: 20px;
  resize: none;
  color: ${({ theme }) => theme.colors.gray4};
  font-size: 18px;
  &::placeholder {
    color: ${({ theme }) => theme.colors.gray4};
  }
  &:focus {
    outline: none;
  }
`;

export const WriteOptionBox = styled.div`
  margin-top: 30px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
