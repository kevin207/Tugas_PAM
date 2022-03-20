import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import HomeScreen from './layer/Home';
import ListScreen from './layer/List';

const Stack = createNativeStackNavigator();

const App = () => {

  return (

    <NavigationContainer>

      <Stack.Navigator initialRouteName='HomeScreen' screenOptions={{headerShown: false}}>

        <Stack.Screen name="HomeScreen" component={HomeScreen} />
        <Stack.Screen name="ListScreen" component={ListScreen} />
        
      </Stack.Navigator>

    </NavigationContainer>
  );

};

export default App;