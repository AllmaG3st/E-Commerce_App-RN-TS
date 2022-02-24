import { FlatList } from "react-native";
import React, { useCallback, useState } from "react";

import { Message } from "../../types/data";

import ListItem from "../../components/ListItem";
import Screen from "../../components/Screen";
import ListItemSeparator from "../../components/ListItemSeparator";
import ListItemDeleteAction from "../../components/ListItemDeleteAction";

const initialMessages: Message[] = [
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
  const [messages, setMessages] = useState<Message[]>(initialMessages);
  const [refreshing, setRefreshing] = useState(false);

  const handleDelete = (message: Message) => {
    setMessages((prevState) =>
      prevState.filter((m: Message) => m.id !== message.id)
    );
  };

  const renderMessageItem = useCallback(({ item }) => {
    console.log("hi");
    return (
      <ListItem
        title={item.title}
        subTitle={item.description}
        image={item.image}
        onPress={() => console.log("hi")}
        renderRightActions={() => (
          <ListItemDeleteAction onPress={() => handleDelete(item)} />
        )}
      />
    );
  }, []);

  return (
    <Screen>
      <FlatList
        data={messages}
        keyExtractor={(msg) => msg.id.toString()}
        renderItem={renderMessageItem}
        ItemSeparatorComponent={ListItemSeparator}
        refreshing={refreshing}
        onRefresh={() => console.log("refreshed")}
      />
    </Screen>
  );
};

export default MessagesScreen;
