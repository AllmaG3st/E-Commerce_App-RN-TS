import { View, TouchableWithoutFeedback, Modal, FlatList } from "react-native";
import React, { memo, useCallback, useState } from "react";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import AppText from "components/AppText";
import PickerItem from "components/PickerItem";

import { COLORS } from "config/colors";
import { Category } from "types/data";

import styles from "./styles";
import globalStyles from "config/globalStyles";

type Props = {
  selectedItem: Category | null;
  onSelectedItem: (a: Category) => void;
  placeHolder: string;
  iconName: React.ComponentProps<typeof MaterialCommunityIcons>["name"];
  items: Category[];
};

const AppPicker: React.FC<Props> = ({
  iconName,
  placeHolder,
  items,
  selectedItem,
  onSelectedItem,
}) => {
  const [modalVisible, setModalVisible] = useState(false);

  const handleModalVisible = () => {
    setModalVisible((prevState) => !prevState);
  };

  const handleRenderPickerItem = useCallback(({ item }: { item: Category }) => {
    return (
      <PickerItem
        label={item.label}
        onPress={() => {
          setModalVisible(false);
          onSelectedItem(item);
        }}
      />
    );
  }, []);

  const handleKeyExtractor = (item: Category) => {
    return item.value.toString();
  };

  return (
    <>
      <TouchableWithoutFeedback onPress={handleModalVisible}>
        <View style={globalStyles.textInputContainer}>
          {iconName && (
            <MaterialCommunityIcons
              name={iconName}
              size={20}
              color={COLORS.medium}
            />
          )}
          <AppText style={styles.text}>
            {selectedItem ? selectedItem.label : placeHolder}
          </AppText>
          <MaterialCommunityIcons
            name="chevron-down"
            size={20}
            color={COLORS.medium}
          />
        </View>
      </TouchableWithoutFeedback>
      <Modal visible={modalVisible} animationType="slide">
        <FlatList
          data={items}
          keyExtractor={handleKeyExtractor}
          renderItem={handleRenderPickerItem}
        />
      </Modal>
    </>
  );
};

export default memo(AppPicker);
