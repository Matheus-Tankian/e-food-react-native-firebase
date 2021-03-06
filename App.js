import React from 'react';
import OnBoarding from './src/screens/OnBoarding';
import { useFonts } from 'expo-font';
import LogIn from './src/screens/LogIn';
import ProductDetails from './src/screens/ProductDetails';
import ProductList from './src/screens/ProductList';
import { DefaultTheme, NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { AppProvider } from './src/components/AppContext';
import Basket from './src/screens/Basket';
import AddLista from './src/screens/AddLista';


export default function App() {

  const [loaded] = useFonts({
    BebasNeue: require('./assets/fonts/BebasNeue-Regular.ttf'),
    Poppins: require('./assets/fonts/Poppins-Regular.ttf'),
  });

  if (!loaded) {
    return null;
  }

  const Stack = createNativeStackNavigator();

  const MyTheme = {
    ...DefaultTheme,
    colors: {
      ...DefaultTheme.colors,
      primary: '#D35400',
      background: '#FFF',
    },
  };

  return (
    <NavigationContainer theme={MyTheme}>
      <AppProvider>

        <Stack.Navigator
          initialRouteName="Welcome"
          screenOptions={{
            headerShown: false,
            gestureEnabled: true,
            headerStyle: {
              backgroundColor: '#D35400',
            },
            headerTintColor: '#FFF',
            headerTitleStyle: {
              fontWeight: 'bold',
            },
          }}
        >

          <Stack.Screen
            name="Welcome"
            component={OnBoarding}
          />

          <Stack.Screen
            name="LogIn"
            component={LogIn}
          />

          <Stack.Screen
            name="Home"
            component={ProductList}
          />

          <Stack.Screen
            name="Basket"
            component={Basket}
            options={{
              headerShown: true,
              title: 'Cesta de Compras',
              headerBackTitle: 'Voltar'
            }}
          />

           <Stack.Screen
            name="AddLista"
            component={AddLista}
            options={{
              headerShown: true,
              title: 'Adicione novos itens',
              headerBackTitle: 'Voltar'
            }}
          />

          <Stack.Screen
            name="Product"
            component={ProductDetails}
            options={{
              headerShown: true,
              title: 'Detalhes',
              headerBackTitle: 'Voltar',
            }}
          />
        </Stack.Navigator>
      </AppProvider>

    </NavigationContainer>
  );
}