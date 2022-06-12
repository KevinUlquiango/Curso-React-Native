import React from "react";
import { Button } from "react-native";
import { Wrapper, WrapperButton, WrapperText } from "../../styles";

type Props = {
  navigation: any;
};
export const Home = (props: Props) => {
  console.log(props);
  const { navigation } = props;
  return (
    <Wrapper>
      <WrapperButton>
        <Button
          title='Ir a contact'
          onPress={() => {
            navigation.navigate("ContactNav");
          }}
        />
      </WrapperButton>
      <WrapperText>Home</WrapperText>
      <WrapperButton>
        <Button
          title='Ir a Product'
          onPress={() => {
            navigation.navigate("ProductNav");
          }}
        />
      </WrapperButton>
    </Wrapper>
  );
};
