import React from "react";
import { useFormikContext } from "formik";

import AppButton from "components/AppButton";

type Props = {
  title: string;
};

const SubmitButton: React.FC<Props> = ({ title = "" }) => {
  const { handleSubmit } = useFormikContext();

  return <AppButton title={title} onPress={handleSubmit} />;
};

export default SubmitButton;
