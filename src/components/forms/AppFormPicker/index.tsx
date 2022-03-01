import { View, Text } from "react-native";
import React, { memo, useCallback } from "react";
import { useFormikContext } from "formik";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import PickerItem from "components/PickerItem";
import AppPicker from "components/AppPicker";
import ErrorMessage from "../ErrorMessage";

import { Category, PickerItemComponentProps } from "types/data";

type Props = {
  error: string | undefined;
  fieldName: string;
  iconName?: React.ComponentProps<typeof MaterialCommunityIcons>["name"];
  items: Category[];
  PickerItemComponent?: React.FC;
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
    <>
      <AppPicker
        iconName={iconName}
        items={items}
        numberOfColumns={3}
        onSelectedItem={onSelectedItem}
        PickerItemComponent={PickerItemComponent}
        placeHolder="Category"
        value={value}
      />
      <ErrorMessage error={error} visible={visible} />
    </>
  );
};

export default memo(AppFormPicker);
