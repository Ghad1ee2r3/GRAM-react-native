import React from "react";
import {
  Container,
  Header,
  Content,
  Card,
  CardItem,
  Text,
  Left,
  Body,
  ListItem,
  Button,
} from "native-base";
import { deleteAddress } from "../redux/actions";
import { connect } from "react-redux";

const AddressCard = ({ address }) => {
  return (
    <ListItem>
      <Container>
        <Header />
        <Content>
          <Card>
            <CardItem header>
              <Left>
                <Body>
                  <Text>{address.address_type}</Text>
                  <Text>{address.first_name} {address.last_name}</Text>
                  <Text note>{address.phone}</Text>
                  <Text note>{address.country}</Text>
                  <Text note>{address.city}</Text>
                  <Text note>{address.address_line_1}</Text>
                  <Text note>{address.address_line_2}</Text>
                  <Button>Delete</Button>
                </Body>
              </Left>
            </CardItem>
          </Card>
        </Content>
      </Container>
    </ListItem>
  );
};

const mapDispatchToProps = (dispatch) => {
    return {
      deleteAddress: (AddressID, history) =>
        dispatch(deleteAddress(AddressID, history)),
    };
  };

export default connect(null,mapDispatchToProps)(AddressCard);