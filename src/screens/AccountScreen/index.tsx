import { View, FlatList } from "react-native";
import React, { useCallback, useContext } from "react";
import { useTranslation } from "react-i18next";
import { useNavigation } from "@react-navigation/native";

import Screen from "components/Screen";
import ListItem from "components/ListItem";
import Icon from "components/Icon";
import ListItemSeparator from "components/ListItemSeparator";

//@ts-ignore
import avatar from "assets/margot.jpg";
import { AccountNavigationGenericProp, MenuItem } from "types/data";
import AuthContext from "../../auth/context";

import { COLORS } from "config/colors";

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
    title: "My Messages",
    icon: {
      name: "email",
      backgroundColor: COLORS.secondary,
    },
    targetScreen: "Messages",
  },
];

const AccountScreen = () => {
  const { user }: any = useContext(AuthContext);

  const { t } = useTranslation();

  const { navigate } = useNavigation<AccountNavigationGenericProp<"Account">>();

  const renderListItem = useCallback(({ item }) => {
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
        onPress={() => navigate(item.targetScreen)}
      />
    );
  }, []);

  return (
    <Screen style={styles.screen}>
      <View style={styles.container}>
        <ListItem title={user.name} subTitle={user.email} image={avatar} />
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
