import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import Cart from "../../Components/Cart";

// Config
import { stackScreenOptions } from "../options";

const { Navigator, Screen } = createStackNavigator();

export default function ShopStack() {
  return (
    <Navigator
      initialRouteName="Cart"
      screenOptions={stackScreenOptions}
    >
      <Screen name="Cart" component={Cart} />
    </Navigator>
  );
}