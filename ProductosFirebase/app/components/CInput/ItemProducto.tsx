import { Avatar, ListItem } from "@rneui/base";
import React from "react";
import { Text, TouchableHighlight, View } from "react-native";

export const ItemProducto = ({ item }: any) => {
  return (
    <View>
      <ListItem topDivider>
        <Avatar
          title={item.codigo}
          containerStyle={{ backgroundColor: "#1d4691" }}
          rounded
        />
        <ListItem.Content>
          <ListItem.Title> {item.nombre} </ListItem.Title>
        </ListItem.Content>
        <ListItem.Content>
          <ListItem.Subtitle>{item.precio}</ListItem.Subtitle>
        </ListItem.Content>
      </ListItem>
    </View>
  );
};
