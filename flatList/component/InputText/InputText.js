import { useContext } from "react";
import { TextInput, Text } from "react-native";
import { WrapperInputText } from "./styles";
import UserContext from "./../../hooks/UserContext";

export const InputText = (props) => {
  const { dataUserInput, setDataUser, isUserNew } =
    useContext(UserContext);
  const {
    data,
    functionState,
    nameData,
    textPlaceholder,
    keyboardType
  } = props;
  return (
    <WrapperInputText>
      <TextInput
        keyboardType={keyboardType ?? "default"}
        placeholder={textPlaceholder}
        value={
          isUserNew ? data[nameData] : dataUserInput.item[nameData]
        }
        onChangeText={(text) => {
          isUserNew
            ? functionState({ ...data, [nameData]: text })
            : setDataUser({
                ...dataUserInput,
                item: {...dataUserInput.item, [nameData]: text }
              });
        }}
      />
    </WrapperInputText>
  );
};
