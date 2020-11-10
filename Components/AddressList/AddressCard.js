import React, {useState} from "react";
import {Pressable} from "react-native";
import {
  Content,
  Card,
  CardItem,
  Text,
  Left,
  Body,
  ListItem,
  Button,
  Right,
  Radio,
} from "native-base";
import { deleteAddress } from "../../redux/actions";
import { connect } from "react-redux";

const AddressCard = ({ address, deleteAddress, setSelectedAddress, checkout }) => {
  const [pressed, setPressed] = useState(false)

  const handlePress = () => {
    if(checkout){
      console.log("onpress")
    const newPress = !pressed
    setPressed(newPress)
    if(newPress){
      setSelectedAddress(address)
      
    } else {
      setSelectedAddress("") 
    }
    }
  }
  return (
    <ListItem onPress={handlePress}>
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
                </Body>
                <Button onPress={() => deleteAddress(address.id)}><Text>Delete</Text></Button>
              </Left>
              {
              checkout?(
                <Right>
                    <Radio selected={pressed} /> 
                </Right>
              ):
              null
              }
            </CardItem>
          </Card>
        </Content>
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