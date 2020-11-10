import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import CheckoutPage from "../../Components/Cart/CheckoutPage";

// Config
import { stackScreenOptions } from "../options";

const { Navigator, Screen } = createStackNavigator();

export default function ShopStack() {
  return (
    <Navigator
      initialRouteName="CheckoutPage"
      screenOptions={stackScreenOptions}
    >
      <Screen name="CheckoutPage" 
      component={CheckoutPage}
      options = {{ title: "Checkout" }}
       />
    </Navigator>
  );
}