import React, { memo } from "react";
import { TextInputProps, View } from "react-native";
import { useFormikContext } from "formik";

import AppTextInput from "components/AppTextInput";
import ErrorMessage from "../ErrorMessage";

import { MaterialCommunityIconsType } from "types/data";

import globalStyles from "config/globalStyles";

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
    <View>
      <AppTextInput
        error={error}
        iconName={iconName}
        onBlur={() => setFieldTouched(fieldName)}
        onChangeText={handleChange(fieldName)}
        placeHolder={placeHolder}
        value={value}
        visible={visible}
        {...props}
      />
      <View style={globalStyles.fieldError}>
        <ErrorMessage error={error} visible={visible} />
      </View>
    </View>
  );
};

export default memo(AppFormField);
