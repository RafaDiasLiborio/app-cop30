import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

// Importando as telas do seu projeto
import TelaInicial from "./telas/TelaInicial";
import TelaMapa from "./telas/TelaMapa";
import TelaReciclagem from "./telas/TelaReciclagem";
import TelaContato from "./telas/TelaContato";
const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="TelaInicial">
        <Stack.Screen name="TelaInicial" component={TelaInicial} />
        <Stack.Screen name="TelaMapa" component={TelaMapa} />
        <Stack.Screen name="TelaReciclagem" component={TelaReciclagem} />
        <Stack.Screen name="TelaContato" component={TelaContato} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
