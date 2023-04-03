import BestGreenus from "./BestGreenus";
import Profile1 from "../../../assets/images/profile1.png";
import Profile2 from "../../../assets/images/profile2.png";
import Profile3 from "../../../assets/images/profile3.png";
import Profile4 from "../../../assets/images/profile4.png";
import Profile5 from "../../../assets/images/profile5.png";
import Profile6 from "../../../assets/images/profile6.png";
const BestGreenusContainer = () => {
  return (
    <BestGreenus
      users={[
        { nickname: "쟈근햄스터", image: Profile1 },
        { nickname: "레모네이드", image: Profile2 },
        { nickname: "봉실", image: Profile3 },
        { nickname: "혜연짱", image: Profile4 },
        { nickname: "Greenary", image: Profile5 },
        { nickname: "오르트구름", image: Profile6 },
      ]}
    />
  );
};

export default BestGreenusContainer;
