import React from "react";
import { connect } from "react-redux";
import { List, Content } from "native-base";

// components
import AddressCard from "./AddressCard";

const AddressList = ({ addresses }) => {
  // send one item from list to display in card
  const addressList = addresses.map((address) => (
    <AddressCard key={address.id} address={address} />
  ));

  return (
    <Content>
      <List>{addressList}</List>
    </Content>
  );
};

const mapStateToProps = ({ addresses }) => ({
  addresses,
});

export default connect(mapStateToProps)(AddressList);