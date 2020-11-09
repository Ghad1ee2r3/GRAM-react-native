import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

// Screens
import UserStack from "./StackNavigators/UserStack";
import CartStack from "./StackNavigators/CartStack";
import ShopStack from "./StackNavigators/ShopStack";

const { Navigator, Screen } = createBottomTabNavigator();

// Config
import { tabBarOptions, tabScreenOptions } from "./options";

export default function RootTabNavigator() {
  return (
    <Navigator
      initialRouteName="Products"
      tabBarOptions={tabBarOptions}
      screenOptions={tabScreenOptions}
    >
      <Screen name="Profile" component={UserStack} />
      <Screen name="Products" component={ShopStack} />
      <Screen name="Cart" component={CartStack} />
    </Navigator>
  );
}
