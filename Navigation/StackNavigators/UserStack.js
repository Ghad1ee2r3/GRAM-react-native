import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { connect } from "react-redux";
// Screens
import Login from "../../Components/Authentication/Login";
import Signup from "../../Components/Authentication/Signup";
import Profile from "../../Components/Profile";
import OrderList from "../../Components/OrderList";
import OrderDetail from "../../Components/OrderDetail";

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
    initialRouteName={user ? "Profile" : "Login"}
    screenOptions={stackScreenOptions}
    >
      {user ? (
        <>
          <Screen
            name="Profile"
            component={Profile}
            options={{ title: "Profile " }}
          />
          <Screen
            name="OrderList"
            component={OrderList}
            options={{ title: "Order List " }}
          />

          <Screen
            name="OrderDetail"
            component={OrderDetail}
            options={
              (({ route }) => {
                const { order } = route.params;
                return {
                  title: order.uuid,
                };
              })
            }
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
        </>
      ) : (
        <>
          <Screen
            name="Login"
            component={Login}
            options={{ headerShown: false }}
          />
          <Screen
            name="Signup"
            component={Signup}
            options={{ headerShown: false }}
          />
        </>
      )}
    </Navigator>
  );
});
