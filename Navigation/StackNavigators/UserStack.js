import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import ProductsList from "../../Components/ProductsList";
import ProductDetail from "../../Components/ProductDetail";

// Config
import { stackScreenOptions } from "../options";

const { Navigator, Screen } = createStackNavigator();

export default function ShopStack() {
  return (
    <Navigator
      initialRouteName="ProductsList"
      screenOptions={stackScreenOptions}
    >
      <Screen name="ProductsList" component={ProductsList} />
      <Screen
        name="ProductDetail"
        component={ProductDetail}
        options={({ route }) => ({ title: route.params.product.name })}
      />
    </Navigator>
  );
}