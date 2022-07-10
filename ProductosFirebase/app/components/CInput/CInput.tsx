import { Input, Icon } from "@rneui/themed";
import { KeyboardTypeOptions } from "react-native";
import { Product } from "../../../../navegacion/app/screens/ProductsScreen";

type Props = {
  valor: string;
  funtionality: any;
  keyboard: KeyboardTypeOptions;
  label: string;
  icon: string;
  iconFamiliar: string;
  productos: any;
  type: string;
};
const CInput = (props: Props) => {
  const {
    valor,
    funtionality,
    keyboard,
    label,
    type,
    icon,
    iconFamiliar,
    productos
  } = props;
  return (
    <Input
      value={valor}
      onChangeText={(valor) => {
        funtionality({ ...productos, [type]: valor });
      }}
      label={label}
      keyboardType={keyboard}
      leftIcon={
        <Icon
          name={icon}
          size={24}
          color='black'
          type={iconFamiliar}
        />
      }
    />
  );
};

export default CInput;
