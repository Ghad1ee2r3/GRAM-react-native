import React from "react";
import { Button, Text, View } from "native-base";

// Redux
import { connect } from "react-redux";
import { logout } from "../../redux/actions";

//Components
import LogoutButton from "./LogoutButton";

const Profile = ({ user, logout, navigation }) => {
  return (
    <View>
      <Text> Profile</Text>

      <Text>username: {user?.username}</Text>
      <Text>email : {user?.email}</Text>
      <Text>First Name : {user?.first_name}</Text>
      <Text>Last Name : {user?.last_name}</Text>
      <Button full onPress={() => navigation.navigate("OrderList")}>
        <Text>order list</Text>
      </Button>
      {/* <Button full onPress={() => navigation.navigate("AddressList")}>
        <Text>Address List</Text>
      </Button> */}
      <LogoutButton logout={logout} />
    </View>
  );
};

const mapStateToProps = ({ user }) => ({ user });

const mapDispatchToProps = {
  logout,
};

export default connect(mapStateToProps, mapDispatchToProps)(Profile);
