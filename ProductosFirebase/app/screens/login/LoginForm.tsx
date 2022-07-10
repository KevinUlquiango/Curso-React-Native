import React from "react";
import { View } from "react-native";
import CInput from "../../components/CInput/CInput";
import { Login } from "../../interface/Login";
import { useState } from "react";
import { Input } from "../../interface/Input";
import { WrapperLogin, WrapperText, Text } from "./styles";
import { Button } from "@rneui/base";
import {
  AutenticationLogin,
  AutenticationLogout
} from "../../services/Autentication";

export const LoginForm = () => {
  const loginInput: Array<Input> = [
    {
      nameInput: "Usuario",
      keyboard: "email-address",
      id: 1,
      icon: "email",
      iconFamiliar: "",
      type: "email"
    },
    {
      nameInput: "Nombre",
      keyboard: "default",
      id: 2,
      icon: "lock",
      iconFamiliar: "entypo",
      type: "password"
    }
  ];

  const login: Login | any = { email: "", password: "" };

  const [dataUser, setDataUser] = useState(login);
  const validarLogin = () => {
    console.log(
      "User: " + dataUser.email,
      " Password: " + dataUser.password
    );
    AutenticationLogin(dataUser);
  };

  const logout = () => {
    AutenticationLogout();
  };
  return (
    <WrapperLogin>
      <View>
        <WrapperText>
          <Text>Ingreso al sistema</Text>
        </WrapperText>

        {loginInput.map((input) => (
          <CInput
            key={input.id}
            valor={dataUser[input.type]}
            funtionality={setDataUser}
            keyboard={input.keyboard}
            label={input.nameInput}
            icon={input.icon}
            iconFamiliar={input.iconFamiliar}
            productos={dataUser}
            type={input.type}
          />
        ))}

        <Button title='Ingresar' onPress={validarLogin} />
        <Text></Text>
        <Button title='Finalizar Seccion' onPress={logout} />
      </View>
    </WrapperLogin>
  );
};
