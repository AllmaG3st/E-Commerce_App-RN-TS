import { View, FlatList } from "react-native";
import React, { useCallback, useContext } from "react";
import { useTranslation } from "react-i18next";
import { useNavigation } from "@react-navigation/native";

import Screen from "components/Screen";
import ListItem from "components/ListItem";
import Icon from "components/Icon";
import ListItemSeparator from "components/ListItemSeparator";
import AuthContext from "../../auth/context";

//@ts-ignore
import avatar from "assets/margot.jpg";
import authStorage from "auth/storage";
import { AccountNavigationGenericProp, MenuItem } from "types/data";

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
  const { user, setUser }: any = useContext(AuthContext);

  const { t } = useTranslation();

  const { navigate } = useNavigation<AccountNavigationGenericProp<"Account">>();

  const handleLogout = () => {
    setUser({});
    authStorage.removeToken();
  };

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
          onPress={handleLogout}
        />
      </View>
    </Screen>
  );
};

export default AccountScreen;
