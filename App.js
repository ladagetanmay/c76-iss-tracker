import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import Homescreen from "./screens/HomeScreen";
import Location from "./screens/IssLocation";
import Meteors from "./screens/Meteors";
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

 export default function App() {
  return (
    < NavigationContainer>
        <Stack.Navigator initialRouteName='Home'screenOptions={{headerShown:false}}>
          <Stack.Screen name= "Home" component={HomeScreen}/>
          <Stack.Screen name= "IssLocation" component={IssLocation}/>
          <Stack.Screen name= "Meteors" component={Meteors}/>
        </Stack.Navigator>
    </NavigationContainer>
  );
}


