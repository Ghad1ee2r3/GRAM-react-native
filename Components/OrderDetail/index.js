import React from "react";
import {
  Text,
  Left,
  Body,
  Content,
  Card,
  CardItem,
  Container,
} from "native-base";

const OrderDetail = ({ route }) => {
  const { order } = route.params;

  return (
    <Container>
      <Content>
        <Card style={{ flex: 0 }}>
          <CardItem header>
            <Left>
              <Body>
                <Text>{order.id}</Text>
                <Text note>{order.uuid}</Text>
                <Text note>Date: {order.created_date}</Text>
                <Text note>Total: {order.total}</Text>
              </Body>
            </Left>
          </CardItem>
        </Card>
      </Content>
    </Container>
  );
};

export default OrderDetail;
