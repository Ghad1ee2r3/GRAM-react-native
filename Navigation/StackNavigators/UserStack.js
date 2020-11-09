import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { connect } from "react-redux";

// Screens
import { LOGIN, SIGNUP, PROFILE } from "../screenNames";
import Login from "../../Components/Authentication/Login";
import Signup from "../../Components/Authentication/Signup";

const { Navigator, Screen } = createStackNavigator();

const mapStateToProps = ({ user }) => ({
  user,
});

export default connect(mapStateToProps)(function UserStack({ user }) {
  return (
    <Navigator initialRouteName={LOGIN}>
      <Screen name={LOGIN} component={Login} options={{ headerShown: false }} />
      <Screen
        name={SIGNUP}
        component={Signup}
        options={{ headerShown: false }}
      />
    </Navigator>
  );
});
