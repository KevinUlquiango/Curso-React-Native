import { Avatar, ListItem } from "@rneui/base";
import React from "react";
import { Text, TouchableHighlight } from "react-native";
import { IGredes } from "../Interfaces/IGrades";

export const ItemGrede = ({
  qualification,
  navigation,
  refresh
}: IGredes | any) => {
  return (
    <TouchableHighlight
      onPress={() => {
        navigation.navigate("GradeFormNav", {
          qualification,
          refresh: refresh
        });
      }}
    >
      <ListItem bottomDivider>
        <Avatar
          title={qualification.subject.substring(0, 1)}
          containerStyle={{ backgroundColor: "#6733b9" }}
          rounded
        />
        <ListItem.Content>
          <ListItem.Title> {qualification.subject} </ListItem.Title>
        </ListItem.Content>
        <ListItem.Content>
          <ListItem.Subtitle>{qualification.grade}</ListItem.Subtitle>
        </ListItem.Content>
        <ListItem.Chevron />
      </ListItem>
    </TouchableHighlight>
  );
};
