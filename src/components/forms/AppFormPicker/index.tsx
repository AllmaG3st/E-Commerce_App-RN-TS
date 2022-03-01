import { View } from "react-native";
import React, { memo, useCallback } from "react";
import { useFormikContext } from "formik";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import AppPicker from "components/AppPicker";
import ErrorMessage from "../ErrorMessage";

import { Category } from "types/data";
import globalStyles from "config/globalStyles";

type Props = {
  error: string | undefined;
  fieldName: string;
  iconName?: React.ComponentProps<typeof MaterialCommunityIcons>["name"];
  items: Category[];
  PickerItemComponent?: React.FC<any>;
  value: Category | any;
  visible: boolean | undefined;
};

const AppFormPicker: React.FC<Props> = ({
  error = "",
  fieldName = "",
  iconName = "menu",
  items,
  PickerItemComponent,
  value = "",
  visible = false,
}) => {
  const { setFieldValue } = useFormikContext();

  const onSelectedItem = useCallback((item: Category) => {
    setFieldValue(fieldName, item);
  }, []);

  return (
    <View>
      <AppPicker
        error={error}
        iconName={iconName}
        items={items}
        numberOfColumns={3}
        onSelectedItem={onSelectedItem}
        PickerItemComponent={PickerItemComponent}
        placeHolder="Category"
        visible={visible}
        value={value}
      />
      <View style={globalStyles.fieldError}>
        <ErrorMessage error={error} visible={visible} />
      </View>
    </View>
  );
};

export default memo(AppFormPicker);
