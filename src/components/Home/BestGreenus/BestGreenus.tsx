import Header from "../Common/Header/Header";
import {
  BestGreenusLayout,
  BestGreenusUserImg,
  BestGreenusUserItem,
  BestGreenusUserList,
  BestGreenusUserName,
} from "./BestGreenus.styles";

interface BestGreenusProps {
  users: {
    nickname: string;
    image: string;
  }[];
}

const BestGreenus = ({ users }: BestGreenusProps) => {
  return (
    <BestGreenusLayout>
      <Header title="베스트 그리너스" subTitle="2022.12.12 ~ 2022.12.14 기준" />
      <BestGreenusUserList>
        {users.map(({ nickname, image }) => (
          <BestGreenusUserItem key={nickname}>
            <BestGreenusUserImg src={image}></BestGreenusUserImg>
            <BestGreenusUserName>@{nickname}</BestGreenusUserName>
          </BestGreenusUserItem>
        ))}
      </BestGreenusUserList>
    </BestGreenusLayout>
  );
};

export default BestGreenus;
