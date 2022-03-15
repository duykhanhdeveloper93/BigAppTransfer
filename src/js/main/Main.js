import * as React from 'react';
import { View, TextInput } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Start from '../start/Start';
import SignIn from '../start/SignIn';
import Login from '../start/Login';

const Stack = createNativeStackNavigator();


const Main = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Start1" component={Start} options={{ headerShown: false }} />
        <Stack.Screen name="Start2" component={SignIn} options={{ headerShown: false }} />
        <Stack.Screen name="Start3" component={Login} options={{ headerShown: false }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default Main;