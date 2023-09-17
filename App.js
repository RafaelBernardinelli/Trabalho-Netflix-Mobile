import { AntDesign, Ionicons, MaterialIcons } from '@expo/vector-icons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import React, { useContext } from 'react';
import { AuthContext } from './src/context/Auth';
import Login from './src/screens/Login';
import Omdb from './src/screens/Omdb/Omdb';
import Details from './src/screens/Tmdb/Details';
import TmdbPage from './src/screens/Tmdb/TmdbPage';

const Tab = createBottomTabNavigator();

export default function App() {
  const { isAuthenticated } = useContext(AuthContext);

  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen
          name="Login"
          component={Login}
          options={{
            tabBarActiveTintColor: '#db0000',
            tabBarIcon: () => (
              <MaterialIcons name="login" size={24} color="black" />
            ),
          }}
        />

        {isAuthenticated && (
          <Tab.Screen
            name="Recomendados"
            component={TmdbPage}
            options={{
              tabBarActiveTintColor: '#db0000',
              tabBarIcon: () => (
                <AntDesign name="check" size={24} color="black" />
              ),
            }}
          />
        )}

        {isAuthenticated && (
          <Tab.Screen
            name="Pesquisa"
            component={Omdb}
            options={{
              tabBarActiveTintColor: '#db0000',
              tabBarIcon: () => (
                <Ionicons name="md-search" size={24} color="black" />
              ),
            }}
          />
        )}

        {isAuthenticated && (
          <Tab.Screen
            name="Detalhes"
            component={Details}
            options={{
              tabBarActiveTintColor: '#db0000',
              tabBarIcon: () => (
                <AntDesign name="info" size={24} color="black" />
              ),
            }}
          />
        )}
      </Tab.Navigator>
    </NavigationContainer>
  );
}
