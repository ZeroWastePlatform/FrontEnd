import { FooterLayout, FooterLogo, FooterNavBlock, FooterRow, FooterText } from "./Footer.styles";
import footerLogo from "../../../assets/images/footer-logo.svg";

const Footer = () => {
  return (
    <FooterLayout>
      <FooterRow>
        <FooterLogo src={footerLogo} />
        <FooterText>Copyrightⓒ2023. by Greenus</FooterText>
        <FooterNavBlock>
          <FooterText>사이트 이용약관</FooterText>
          <FooterText>개인정보 처리방침</FooterText>
        </FooterNavBlock>
      </FooterRow>
    </FooterLayout>
  );
};

export default Footer;
