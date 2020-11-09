import React from "react";
import {
  Header,
  Content,
  Card,
  CardItem,
  Text,
  Left,
  Body,
  ListItem,
} from "native-base";

const OrderCard = ({ order, navigation }) => {
  return (
    <ListItem
      button
      onPress={() => navigation.navigate("OrderDetail", { order })}
    >
      <Content>
        <Card>
          <Header />
          <CardItem header>
            <Left>
              <Body>
                <Text>{order.uuid}</Text>
                <Text note>Date :{order.created_date}</Text>
                <Text note>Total:{order.total}</Text>
              </Body>
            </Left>
          </CardItem>
        </Card>
      </Content>
    </ListItem>
  );
};

export default OrderCard;
