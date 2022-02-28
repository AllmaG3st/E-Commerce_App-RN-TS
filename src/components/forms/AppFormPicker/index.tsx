import { View, Text } from "react-native";
import React from "react";
import { useFormikContext } from "formik";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import AppPicker from "components/AppPicker";
import ErrorMessage from "../ErrorMessage";

import { Category } from "types/data";

type Props = {
  error: string | undefined;
  fieldName: string;
  iconName?: React.ComponentProps<typeof MaterialCommunityIcons>["name"];
  items: Category[];
  value: string | null;
  visible: boolean | undefined;
};

const AppFormPicker: React.FC<Props> = ({
  error = "",
  fieldName = "",
  iconName = "menu",
  items,
  value = "",
  visible = false,
}) => {
  const { setFieldValue } = useFormikContext();

  return (
    <>
      <AppPicker
        iconName={iconName}
        items={items}
        onSelectedItem={(item: Category) =>
          setFieldValue(fieldName, item.label)
        }
        placeHolder="Category"
        value={value}
      />
      <ErrorMessage error={error} visible={visible} />
    </>
  );
};

export default AppFormPicker;
