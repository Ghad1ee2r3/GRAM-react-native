import React, { Component } from "react";
//navigation
import { createStackNavigator } from "@react-navigation/stack";
// Components
import ProductsList from "../Components/ProductsList";
import ProductDetail from "../Components/ProductDetail";
import { Text, Left, Body, Right, Button, ListItem, Icon } from "native-base";


const { Navigator, Screen } = createStackNavigator();

export default function RootNavigation() {
  return (
    <Navigator initialRouteName="ProductsList">
      <Screen
        name="ProductsList"
        component={ProductsList}
        options={{
          title: "Products List ",
          headerTintColor: "white",
          headerStyle: {
            backgroundColor: "rgb(20,90,100)",
          },
          headerTitleStyle: {
            fontWeight: "bold",
          },
        }}
      />

      <Screen
        name="ProductDetail"
        component={ProductDetail}
        options={
          (({ route }) => {
            const { product } = route.params;
            console.log(product);
            return {
              title: product.name,
            };
          },
          {
            headerTintColor: "white",
            headerStyle: {
              backgroundColor: "rgb(20,90,100)",
            },
            headerTitleStyle: {
              fontWeight: "bold",
            },
          })
        }
      />
    </Navigator>
  );
}
