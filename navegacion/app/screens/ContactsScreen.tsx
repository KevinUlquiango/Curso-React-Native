import React from "react";
import { Button } from "react-native";
import { WrapperComponet, WrapperText } from "../../styles";

type Props = { navigation: any };
export const Contacts = (props: Props) => {
  const { navigation } = props;
  return (
    <WrapperComponet>
      <WrapperText>Contacts</WrapperText>
      <Button
        title='Ir a Home'
        onPress={() => {
          navigation.navigate("HomeNav");
        }}
      ></Button>
    </WrapperComponet>
  );
};
