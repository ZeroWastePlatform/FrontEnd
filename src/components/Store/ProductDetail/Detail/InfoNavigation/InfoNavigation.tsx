import { InfoNavigationItem, InfoNavigationLayout, InfoNavigationRow } from "./InfoNavigation.styles";

interface InfoNavigationProps {
  data: { review: string; ask: string };
  navigate: (type: string) => void;
  navigation: string;
}

const InfoNavigation = ({ data, navigate, navigation }: InfoNavigationProps) => {
  return (
    <InfoNavigationLayout>
      <InfoNavigationRow>
        {[
          { ko: "상품정보", en: "info" },
          { ko: `리뷰${data.review}`, en: "review" },
          { ko: "배송/환불", en: "delivery" },
          { ko: `문의${data.ask}`, en: "ask" },
          { ko: "추천제품", en: "recommend" },
        ].map(el => {
          return (
            <InfoNavigationItem key={el.en} onClick={() => navigate(el.en)} selected={navigation === el.en}>
              {el.ko}
            </InfoNavigationItem>
          );
        })}
      </InfoNavigationRow>
    </InfoNavigationLayout>
  );
};

export default InfoNavigation;
