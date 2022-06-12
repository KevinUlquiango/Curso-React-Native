import { TextInput } from "react-native";
import { Wrapper } from "./styles";

export const Input = (props) => {
  const { name, setFunctions, listProduct, keyboard } = props;
  return (
    <Wrapper>
      <TextInput
        keyboardType={keyboard}
        editable={name.nameAttribute === "salePrice" ? false : true}
        placeholder={name.placeholder}
        value={listProduct.data[name.nameAttribute].toString()}
        onChangeText={(text) => {
          setFunctions({
            ...listProduct,
            data: {
              ...listProduct.data,
              [name.nameAttribute]: text,
              salePrice:
                name.nameAttribute == "priceProduct"
                  ? isNaN(parseFloat(text))
                    ? (0.0).toFixed(2)
                    : (
                        parseFloat(text) * 0.2 +
                        parseFloat(text)
                      ).toFixed(2)
                  : parseFloat(listProduct.data.salePrice).toFixed(2)
            }
          });
        }}
      />
    </Wrapper>
  );
};
