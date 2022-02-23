import { FlatList } from "react-native";
import React, { useCallback } from "react";

import ListItem from "../../components/ListItem";
import Screen from "../../components/Screen";
import { Message } from "../../types/data";
import ListItemSeparator from "../../components/ListItemSeparator";

const messages: Message[] = [
  {
    id: 1,
    title: "T1",
    description: "D1",
    image: require("../../assets/margot.jpg"),
  },
  {
    id: 2,
    title: "T2",
    description: "D2",
    image: require("../../assets/margot.jpg"),
  },
];

type Props = {};

const MessagesScreen = () => {
  const renderMessageItem = useCallback((item: Message) => {
    return (
      <ListItem
        title={item.title}
        subTitle={item.description}
        image={item.image}
      />
    );
  }, []);

  return (
    <Screen>
      <FlatList
        data={messages}
        keyExtractor={(msg) => msg.id.toString()}
        renderItem={({ item }) => renderMessageItem(item)}
        ItemSeparatorComponent={ListItemSeparator}
      />
    </Screen>
  );
};

export default MessagesScreen;
