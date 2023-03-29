import { InfoNavigationItem, InfoNavigationLayout, InfoNavigationRow } from "./InfoNavigation.styles";
import { navigationDataType } from "./InfoNavigationContainer";

interface InfoNavigationProps {
  data: navigationDataType;
  navigate: (type: string) => void;
  navigation: string;
}

const InfoNavigation = ({ data, navigate, navigation }: InfoNavigationProps) => {
  return (
    <InfoNavigationLayout>
      <InfoNavigationRow>
        {[
          { ko: "상품정보", en: "info" },
          { ko: "리뷰", en: "review", count: data.reviewCount },
          { ko: "배송/환불", en: "delivery" },
          { ko: "문의", en: "ask", count: data.askCount ?? 0 },
          { ko: "추천제품", en: "recommend" },
        ].map(element => {
          return (
            <InfoNavigationItem
              key={element.en}
              onClick={() => navigate(element.en)}
              selected={navigation === element.en}
            >
              {element.ko}
              {element.count !== undefined ? <i>{element.count}</i> : null}
            </InfoNavigationItem>
          );
        })}
      </InfoNavigationRow>
    </InfoNavigationLayout>
  );
};

export default InfoNavigation;
