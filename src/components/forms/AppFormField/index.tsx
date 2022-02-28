import React from "react";
import { TextInputProps } from "react-native";
import { useFormikContext } from "formik";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import AppTextInput from "components/AppTextInput";
import ErrorMessage from "../ErrorMessage";

interface Props extends TextInputProps {
  error: string | undefined;
  iconName: React.ComponentProps<typeof MaterialCommunityIcons>["name"];
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

export default AppFormField;
