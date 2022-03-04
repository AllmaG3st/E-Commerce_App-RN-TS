import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

import AppTouchable from "components/AppTouchable";

import { AppNavigationGenericProp } from "types/data";
import { COLORS } from "config/colors";

const NewListingButton = () => {
  const { navigate } =
    useNavigation<AppNavigationGenericProp<"AddListingTab">>();

  const handleNavigateToListingEditScreen = () => {
    navigate("AddListingTab");
  };

  return (
    <View style={styles.container}>
      <AppTouchable onPress={handleNavigateToListingEditScreen}>
        <MaterialCommunityIcons name="plus-circle" color="white" size={40} />
      </AppTouchable>
    </View>
  );
};

export default NewListingButton;

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    backgroundColor: COLORS.primary,
    borderColor: COLORS.white,
    borderWidth: 10,
    borderRadius: 40,
    bottom: 20,
    justifyContent: "center",
    height: 80,
    width: 80,
  },
});
