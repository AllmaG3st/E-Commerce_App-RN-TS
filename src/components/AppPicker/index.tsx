import { View, TouchableWithoutFeedback, Modal, Text } from "react-native";
import React, { memo, useState } from "react";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import AppText from "components/AppText";

import { COLORS } from "config/colors";
import { Category } from "types/data";

import styles from "./styles";
import globalStyles from "config/globalStyles";
import { FlatList, ScrollView } from "react-native-gesture-handler";
import PickerItem from "components/PickerItem";

type Props = {
  placeHolder: string;
  iconName: React.ComponentProps<typeof MaterialCommunityIcons>["name"];
  items: Category[];
};

const AppPicker: React.FC<Props> = ({ iconName, placeHolder, items }) => {
  const [modalVisible, setModalVisible] = useState(false);

  const handleModalVisible = () => {
    setModalVisible((prevState) => !prevState);
  };

  const handleRenderPickerItem = ({ item }: { item: Category }) => {
    return <PickerItem label={item.label} onPress={() => {}} />;
  };

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
          <AppText style={styles.text}>{placeHolder}</AppText>
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
