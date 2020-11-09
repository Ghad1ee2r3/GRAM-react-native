import React from "react";
import { Icon } from "native-base";


export const stackScreenOptions = {
  headerStyle: {
    backgroundColor: "rgb(20,90,100)",
  },
  headerTitleStyle: {
    fontWeight: "bold",
  },
  headerTintColor: "white",
};

export const tabBarOptions = {
  showLabel: false,
  activeTintColor: "white",
  inactiveTintColor: "black",
  style: {
    backgroundColor: "rgb(20,90,100)",
  },
};

export const tabScreenOptions = ({ route }) => ({
  tabBarIcon: ({ color }) => {
    let iconName = "";
    switch (route.name) {
      case "Profile":
        iconName = "account";
        break;

      case "Products":
        iconName = "home";
        break;

      default:
        iconName = "cart";
    }
    return (
      <Icon name={iconName} type="MaterialCommunityIcons" style={{ color }} />
    );
  },
});