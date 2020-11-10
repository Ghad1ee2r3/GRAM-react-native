import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { connect } from "react-redux";
// Screens
import Login from "../../Components/Authentication/Login";
import Signup from "../../Components/Authentication/Signup";
import Profile from "../../Components/Profile";
import OrderList from "../../Components/OrderList";
import OrderDetail from "../../Components/OrderDetail";

const { Navigator, Screen } = createStackNavigator();

const mapStateToProps = ({ user }) => ({
  user,
});

export default connect(mapStateToProps)(function UserStack({ user }) {
  return (
    <Navigator initialRouteName={user ? "Profile" : "Login"}>
      {user ? (
        <>
          <Screen
            name="Profile"
            component={Profile}
            options={{
              title: "Profile ",
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
            name="OrderList"
            component={OrderList}
            options={{
              title: "Order List ",
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
            name="OrderDetail"
            component={OrderDetail}
            options={
              (({ route }) => {
                const { order } = route.params;
                return {
                  title: order.uuid,
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
