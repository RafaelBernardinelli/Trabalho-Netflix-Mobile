import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";
import Details from "./src/screens/Tmdb/Details";
import TmdbPage from "./src/screens/Tmdb/TmdbPage";
import Omdb from "./src/screens/Omdb/Omdb";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Recomendados" component={TmdbPage} />
        <Stack.Screen name="Detalhes" component={Details} />
        <Stack.Screen name="Pesquisa" component={Omdb} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
