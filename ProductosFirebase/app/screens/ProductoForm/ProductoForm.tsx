import React from "react";
import { Alert } from "react-native";

import { useState } from "react";
import CInput from "../../components/CInput/CInput";
import { Input } from "../../interface/Input";
import { Button } from "@rneui/base";
import { guardar } from "../../services/ProductoServices";
import { ProductoDB } from "../../interface/ProductoDB";
import { Wrapper } from "../../common/style/stylesGlobal";
const ProductoForm = (props: any) => {
  const Inputs: Array<Input> = [
    {
      nameInput: "Código",
      keyboard: "numeric",
      id: 0,
      icon: "form",
      iconFamiliar: "ant-design",
      type: "codigo"
    },
    {
      nameInput: "Nombre",
      keyboard: "default",
      id: 1,
      icon: "idcard",
      iconFamiliar: "ant-design",
      type: "nombre"
    },
    {
      nameInput: "Precio",
      keyboard: "numeric",
      id: 2,
      icon: "money",
      iconFamiliar: "font-awesome",
      type: "precio"
    }
  ];

  const InitialStateProducto: ProductoDB | any = {
    codigo: "",
    nombre: "",
    precio: ""
  };
  const [product, setProducto] = useState(InitialStateProducto);
  const { navigation, route } = props;
  const guardarProducto = () => {
    if (
      product.codigo !== "" &&
      product.nombre !== "" &&
      !isNaN(product.precio)
    ) {
      guardar({
        codigo: product.codigo,
        nombre: product.nombre,
        precio: parseFloat(product.precio)
      });
      setProducto(InitialStateProducto);
      navigation.goBack();
      console.log(route);
      if (route.params && route.params.fnRepintarLita) {
        route.params.fnRepintarLita();
      }
    } else {
      Alert.alert("!Debe llenar todos los campos¡");
    }
  };

  return (
    <Wrapper>
      {Inputs.map((input) => (
        <CInput
          key={input.id}
          valor={product[input.type]}
          funtionality={setProducto}
          keyboard={input.keyboard}
          label={input.nameInput}
          icon={input.icon}
          iconFamiliar={input.iconFamiliar}
          productos={product}
          type={input.type}
        />
      ))}

      <Button title='Guardar' onPress={guardarProducto} />
    </Wrapper>
  );
};
export default ProductoForm;
