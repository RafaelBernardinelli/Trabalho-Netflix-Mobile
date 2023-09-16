import { AntDesign, Ionicons, MaterialIcons } from '@expo/vector-icons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import Login from './src/screens/Login';
import Omdb from './src/screens/Omdb/Omdb';
import Details from './src/screens/Tmdb/Details';
import TmdbPage from './src/screens/Tmdb/TmdbPage';

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen
          name="Login"
          component={Login}
          options={{
            tabBarIcon: () => (
              <MaterialIcons name="login" size={24} color="black" />
            ),
          }}
        />
        <Tab.Screen
          name="Recomendados"
          component={TmdbPage}
          options={{
            tabBarIcon: () => (
              <AntDesign name="check" size={24} color="black" />
            ),
          }}
        />
        <Tab.Screen
          name="Pesquisa"
          component={Omdb}
          options={{
            tabBarIcon: () => (
              <Ionicons name="md-search" size={24} color="black" />
            ),
          }}
        />
        <Tab.Screen name="Detalhes" component={Details} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
