import React from "react";
import Field from "./Field";

interface FieldContainerProps {
  title: string;
  description: string;
  placeholder: string;
  isCertification?: boolean;
}

const FieldContainer = ({ title, description, placeholder, isCertification }: FieldContainerProps) => {
  return <Field title={title} description={description} placeholder={placeholder} isCertification={isCertification} />;
};

export default FieldContainer;
