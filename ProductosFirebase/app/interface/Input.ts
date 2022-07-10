import { KeyboardTypeOptions } from "react-native";
import { Input } from '@rneui/themed';

export interface Input {
  nameInput: string;
  id: number;
  keyboard: KeyboardTypeOptions;
  icon: string;
  iconFamiliar: string;
  productos?: any;
  type: string;
}
