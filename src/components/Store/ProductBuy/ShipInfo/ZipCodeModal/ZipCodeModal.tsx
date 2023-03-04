import DaumPostcodeEmbed from "react-daum-postcode";
import { ZipCodeModalBlock, ZipCodeModalLayout } from "./ZipCodeModal.styles";

interface ZipCodeModalProps {
  changePostStatus: () => void;
  onComplete: any;
}

const ZipCodeModal = ({ onComplete, changePostStatus }: ZipCodeModalProps) => {
  return (
    <ZipCodeModalLayout scroll={document.documentElement.scrollTop} onClick={changePostStatus}>
      <DaumPostcodeEmbed
        autoClose
        onComplete={onComplete}
        style={{ width: "400px", height: "400px", border: "1px solid #eaeaea" }}
      />
    </ZipCodeModalLayout>
  );
};

export default ZipCodeModal;
