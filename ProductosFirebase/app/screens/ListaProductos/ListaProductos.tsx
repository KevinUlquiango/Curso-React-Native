import { Button, FAB } from "@rneui/base";
import React from "react";
import { View, Text, FlatList } from "react-native";
import { consultar } from "../../services/ProductoServices";
import { useState, useEffect } from "react";
import { ItemProducto } from "../../components/CInput/ItemProducto";
import { Wrapper } from "../../common/style/stylesGlobal";

const ListaProductos = (props: any) => {
  const { navigation } = props;
  const [productos, setProductos] = useState<any>([]);
  useEffect(() => {
    recuperarProductos();
  }, []);
  const recuperarProductos = () => {
    consultar(setProductos);
  };
  return (
    <Wrapper>
      {/* <Button title='Cargar Productos' onPress={recuperarProductos} /> */}

      <FlatList
        data={productos}
        renderItem={({ item }) => <ItemProducto item={item} />}
        keyExtractor={(item) => item.codigo}
      />

      <FAB
        title='+'
        placement='right'
        onPress={() => {
          navigation.navigate("ProductoFormNav", {
            fnRepintarLita: recuperarProductos
          });
        }}
      />
    </Wrapper>
  );
};
export default ListaProductos;
