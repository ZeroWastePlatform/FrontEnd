import styled from "styled-components";

export const OptionsLayout = styled.div`
  width: 100%;
`;

export const OptionsTitle = styled.div`
  font-size: 24px;
  font-weight: 700;
  margin-bottom: 19px;
`;

export const OprionsSelectWrapper = styled.div`
  display: flex;
  align-items: center;
  position: relative;
`;

export const OptionsSelectWrap = styled.select<{ require: string }>`
  width: 100%;
  height: 56px;
  margin-bottom: 15px;
  border-radius: 10px;
  border: 2px solid ${({ theme, require }) => (require === "true" ? theme.colors.primaryGreen100 : theme.colors.gray2)};
  &:focus {
    outline: none;
  }
  font-size: 22px;
  font-weight: 500;
  color: ${({ theme }) => theme.colors.gray8};
  padding: 0 20px;
  -webkit-appearance: none; /* for chrome */
  -moz-appearance: none; /*for firefox*/
  appearance: none;
`;

export const Icon = styled.img`
  position: absolute;
  top: 20px;
  right: 20px;
  width: 24px;
  height: 24px;
`;

export const OptionsOption = styled.option`
  font-size: 24px;
  font-weight: 700;
`;

export const OptionsSelectProductBox = styled.div`
  font-size: 22px;
  font-weight: 500;
  padding: 15px 20px;
  width: 100%;
  border-radius: 10px;
  color: ${({ theme }) => theme.colors.gray8};
  background-color: ${({ theme }) => theme.colors.gray1};
  display: flex;
  flex-direction: column;
  gap: 17px;
  margin-bottom: 15px;
`;

export const OptionsSelectProductTopBox = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const OptionsSelectProductDeleteImage = styled.img`
  width: 20px;
  height: 20px;
  font-weight: 600;
`;

export const OptionsSelectProductTitle = styled.div``;

export const OptionsSelectProductBottomBox = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
`;

export const OptionsSelectProductCountBox = styled.div`
  display: flex;
  align-items: center;
  gap: 18px;
`;

export const OptionsSelectProductPrice = styled.div`
  font-size: 22px;
  font-weight: 700;
  color: ${({ theme }) => theme.colors.gray8};
`;

export const OptionsTotalPriceBox = styled.div`
  margin-top: 40px;
  font-size: 22px;
  font-weight: 500;
  display: flex;
  justify-content: space-between;
`;

export const OptionsTotalPriceTitle = styled.div`
  color: ${({ theme }) => theme.colors.gray9};
`;

export const OptionsTotalPrice = styled.div`
  font-size: 30px;
  font-weight: 700;
  display: flex;
  justify-content: space-between;
`;
