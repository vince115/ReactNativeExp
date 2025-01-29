import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import HomeScreen from "../screens/HomeScreen";
import AddCardScreen from "../screens/AddCardScreen";
import StudyScreen from "../screens/StudyScreen";

const Stack = createStackNavigator();

const AppNavigator = () => {
  return (
    <Stack.Navigator initialRouteName="Home">
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="AddCard" component={AddCardScreen} />
      <Stack.Screen name="Study" component={StudyScreen} />
    </Stack.Navigator>
  );
};

export default AppNavigator;
