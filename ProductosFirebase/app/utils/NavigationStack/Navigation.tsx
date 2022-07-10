import { createNativeStackNavigator } from "@react-navigation/native-stack";
import ListaProductos from "../../screens/ListaProductos/ListaProductos";
import { LoginForm } from "../../screens/login/LoginForm";
import ProductoForm from "../../screens/ProductoForm/ProductoForm";
const Stack = createNativeStackNavigator();
const LoginStack = createNativeStackNavigator();

export const NavigationStack = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: "#EFA71A"
        },
        headerTintColor: "#000",
        headerTitleStyle: {
          fontWeight: "bold"
        }
      }}
    >
      <Stack.Screen
        name='listaProductosNav'
        component={ListaProductos}
        options={{ title: "Lista de Productos" }}
      />
      <Stack.Screen
        name='ProductoFormNav'
        component={ProductoForm}
        options={{ title: "Formulario Producto" }}
      />
    </Stack.Navigator>
  );
};

export const LoginNav = () => {
  return (
    <LoginStack.Navigator>
      <LoginStack.Screen
        name='LoginNav'
        component={LoginForm}
        options={{
          title: "LoginForm",
          // ocultar cabezera
          headerShown: false
        }}
      />
    </LoginStack.Navigator>
  );
};
