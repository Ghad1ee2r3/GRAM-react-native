import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { connect } from "react-redux";
// Screens
import Login from "../../Components/Authentication/Login";
import Signup from "../../Components/Authentication/Signup";

import AddressList from "../../Components/AddressList";
import AddAddress from "../../Components/AddAddress";

// Config
import { stackScreenOptions } from "../options";

const { Navigator, Screen } = createStackNavigator();

const mapStateToProps = ({ user }) => ({
  user,
});

export default connect(mapStateToProps)(function UserStack({ user }) {
  return (
    <Navigator 
      initialRouteName="Login"
      screenOptions={stackScreenOptions}
    >
      <Screen name="Login" component={Login} options={{ headerShown: false }} />
      <Screen
        name="Signup"
        component={Signup}
        options={{ headerShown: false }}
      />
      <Screen 
      name="AddressList" 
      component={AddressList} 
      options={{ title: "Addresses" }}
      />
      
      <Screen
        name="AddAddress"
        component={AddAddress}
        options={{ title: "Add address" }}
      />
    </Navigator>
  );
});

