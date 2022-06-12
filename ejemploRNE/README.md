# React Native Elements

`https://reactnativeelements.com/`

**Instalaciones necesarias para ejecutar un nuevo proyecto usando react native element**

`npm install @rneui/base@edge @rneui/themed@edge`

`npm install @rneui/themed @rneui/base`

`npm install react-native-vector-icons`

`npx react-native link react-native-vector-icons`

**Página para por ver los iconos disponibles a usar**

`https://oblador.github.io/react-native-vector-icons/`

```
import { Button, Icon } from "@rneui/base";
<Button
icon={{
          name: "apple",
          type: "font-awesome",
          size: 15,
          color: "white"
        }}
title={"React Native Elements"}
/>
```
