import React, { memo } from "react";
import { TextInputProps } from "react-native";
import { useFormikContext } from "formik";

import AppTextInput from "components/AppTextInput";
import ErrorMessage from "../ErrorMessage";

import { MaterialCommunityIconsType } from "types/data";

interface Props extends TextInputProps {
  error: string | undefined;
  iconName?: MaterialCommunityIconsType;
  fieldName: string;
  placeHolder: string;
  value: string;
  visible: boolean | undefined;
  props?: TextInputProps;
}

const AppFormField: React.FC<Props> = ({
  error = "",
  iconName,
  fieldName,
  placeHolder = "",
  value = "",
  visible = false,
  ...props
}) => {
  const { setFieldTouched, handleChange } = useFormikContext();

  return (
    <>
      <AppTextInput
        iconName={iconName}
        onBlur={() => setFieldTouched(fieldName)}
        onChangeText={handleChange(fieldName)}
        placeHolder={placeHolder}
        value={value}
        {...props}
      />
      <ErrorMessage error={error} visible={visible} />
    </>
  );
};

export default memo(AppFormField);
