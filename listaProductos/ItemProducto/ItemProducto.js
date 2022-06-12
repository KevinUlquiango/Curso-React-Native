import { Text, View, StyleSheet } from "react-native";
import {
  Wrapper,
  WraperIndex,
  WrapperProduct,
  WrapperCost,
  WrapperButton
} from "./styles";
import { useContext } from "react";
import { CButton } from "../CButton/CButton";
import UserContext from "./../hooks/UserContext";
export const ItemProducto = (props) => {
  const { setIndex } = useContext(UserContext);
  const { dataItem, setFunctions, listProduct, setModal } = props;
  const item = dataItem.item;
  const index = dataItem.index;
  return (
    <Wrapper>
      <WraperIndex>
        <Text>{item.id}</Text>
      </WraperIndex>
      <WrapperProduct>
        <Text
          style={{
            fontWeight: "bold",
            fontSize: 15,
            fontStyle: "italic"
          }}
        >
          {item.name}
        </Text>
        <Text>{item.category}</Text>
      </WrapperProduct>
      <WrapperCost style={{ fontWeight: "bold" }}>{`USD: ${parseFloat(
        item.salePrice
      ).toFixed(2)}`}</WrapperCost>
      <WrapperButton>
        <CButton
          text='Editar'
          colorText='#fff'
          colorBtn='#1a1a57'
          functionality={() => {
            setFunctions({
              ...listProduct,
              data: { ...item },
              isNew: false,
              position: index
            });
          }}
        ></CButton>
        <CButton
          text='Eliminar'
          colorBtn='#b50b2d'
          colorText='#fff'
          functionality={() => {
            setIndex(index);
            setModal(true);
          }}
        ></CButton>
      </WrapperButton>
    </Wrapper>
  );
};
