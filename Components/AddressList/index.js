import React from "react";
import { connect } from "react-redux";
import { List, Content, Button, Text, Container, ListItem } from "native-base";

// components
import AddressCard from "./AddressCard";

const AddressList = ({ addresses, navigation }) => {
  // send one item from list to display in card
  const addressList = addresses.map((address) => (
    <AddressCard key={address.id} address={address} />
  ));

  return (
    <Container>
      <Content>
        <List>
          {addressList}
          <ListItem>
            <Button onPress={() => navigation.navigate("AddAddress")}><Text>Add new Address</Text></Button>
          </ListItem>
          </List>
      </Content>
    </Container>
  );
};

const mapStateToProps = ({ addresses }) => ({
  addresses,
});

export default connect(mapStateToProps)(AddressList);