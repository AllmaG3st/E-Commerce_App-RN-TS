import {
  View,
  TouchableWithoutFeedback,
  Modal,
  FlatList,
  Button,
} from "react-native";
import React, { memo, useCallback, useState } from "react";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import AppText from "components/AppText";
import PickerItem from "components/PickerItem";

import { COLORS } from "config/colors";
import { Category } from "types/data";

import styles from "./styles";
import globalStyles from "config/globalStyles";
import Screen from "components/Screen";

type Props = {
  iconName?: React.ComponentProps<typeof MaterialCommunityIcons>["name"];
  items: Category[];
  numberOfColumns?: number;
  onSelectedItem?: (a: Category) => void;
  PickerItemComponent?: React.FC<any>;
  placeHolder: string;
  value?: Category;
};

const AppPicker: React.FC<Props> = ({
  iconName = null,
  items,
  numberOfColumns = 1,
  onSelectedItem = () => {},
  PickerItemComponent = PickerItem,
  placeHolder = "",
  value,
}) => {
  const [modalVisible, setModalVisible] = useState(false);

  const handleModalVisible = () => {
    setModalVisible((prevState) => !prevState);
  };

  const handleRenderPickerItem = useCallback(({ item }: { item: Category }) => {
    return (
      <PickerItemComponent
        item={item}
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
          {value ? (
            <AppText style={styles.text}>{value.label}</AppText>
          ) : (
            <AppText style={styles.placeHolder}>{placeHolder}</AppText>
          )}
          <MaterialCommunityIcons
            name="chevron-down"
            size={20}
            color={COLORS.medium}
          />
        </View>
      </TouchableWithoutFeedback>
      <Modal visible={modalVisible} animationType="slide">
        <Screen>
          <Button title="Close" onPress={handleModalVisible} />
          <FlatList
            data={items}
            keyExtractor={handleKeyExtractor}
            numColumns={numberOfColumns}
            renderItem={handleRenderPickerItem}
          />
        </Screen>
      </Modal>
    </>
  );
};

export default memo(AppPicker);
