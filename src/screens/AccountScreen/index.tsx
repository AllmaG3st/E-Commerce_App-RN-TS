import { View, Text, FlatList } from "react-native";
import React from "react";
import { useTranslation } from "react-i18next";

import Screen from "../../components/Screen";
import ListItem from "../../components/ListItem";
import Icon from "../../components/Icon";
import ListItemSeparator from "../../components/ListItemSeparator";

import { COLORS } from "../../config/colors";
import { MenuItem } from "../../types/data";

import styles from "./styles";

const menuItems: MenuItem[] = [
  {
    title: "My Listings",
    icon: {
      name: "format-list-bulleted",
      backgroundColor: COLORS.primary,
    },
  },
  {
    title: "My Account",
    icon: {
      name: "email",
      backgroundColor: COLORS.secondary,
    },
  },
];

const AccountScreen = () => {
  const { t } = useTranslation();

  const renderListItem = ({ item }: any) => {
    return (
      <ListItem
        title={item.title}
        IconComponent={
          <Icon
            name={item.icon.name}
            bgColor={item.icon.backgroundColor}
            size={50}
          />
        }
      />
    );
  };

  return (
    <Screen style={styles.screen}>
      <View style={styles.container}>
        <ListItem
          title="Margot Robbie"
          subTitle="harleyqueen@gmail.com"
          image={require("../../assets/margot.jpg")}
        />
      </View>
      <View style={styles.container}>
        <FlatList
          data={menuItems}
          keyExtractor={(menuItem) => menuItem.title}
          renderItem={renderListItem}
          ItemSeparatorComponent={ListItemSeparator}
        />
      </View>
      <View style={styles.container}>
        <ListItem
          title={t("LogOut")}
          IconComponent={
            <Icon name="logout" size={50} bgColor={COLORS.yellow} />
          }
        />
      </View>
    </Screen>
  );
};

export default AccountScreen;
