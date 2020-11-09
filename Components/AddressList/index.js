import React from "react";
import { connect } from "react-redux";
import { List, Content, Button } from "native-base";

// components
import AddressCard from "./AddressCard";

const AddressList = ({ addresses, navigation }) => {
  // send one item from list to display in card
  const addressList = addresses.map((address) => (
    <AddressCard key={address.id} address={address} />
  ));

  return (
    <Content>
      <List>{addressList}</List>
      <Button onPress={() => navigation.replace("AddAddress")}>Add new Address</Button>
    </Content>
  );
};

const mapStateToProps = ({ addresses }) => ({
  addresses,
});

export default connect(mapStateToProps)(AddressList);