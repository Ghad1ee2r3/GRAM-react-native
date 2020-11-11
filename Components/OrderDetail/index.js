import React from "react";
import {
  List,
  Text,
  Left,
  Right,
  Body,
  Content,
  Card,
  CardItem,
  Container,
  Thumbnail,
} from "native-base";
import { ImageBackground, View } from "react-native";

// Style
import styles from "../OrderList/styles";
import { Image, StyleSheet } from "react-native";

const OrderDetail = ({ route }) => {
  const { order } = route.params;
  let totaltax = order.total * 0.15;
  totaltax = totaltax + parseInt(order.total);

  const orderItems = order.items.map((item) => (
    <>
      <Card transparent style={{ flex: 0 }}>
        <CardItem header>
          <Left>
            <Thumbnail source={{ uri: item.featured_image }} />
            <Body>
              <Text>{item.name}</Text>
              <Text note>Total:{item.price} SAR</Text>
            </Body>
          </Left>
        </CardItem>
      </Card>
    </>
  ));

  return (
    <ImageBackground
      source={{
        uri:
          "https://cdn.discordapp.com/attachments/772347432763523097/775650698125377546/h4-page-bg-img.jpg",
      }}
      style={styles.background}
    >
      <Content>
        <Card transparent style={{ flex: 0 }}>
          <CardItem header style={styles.transparent}>
            <Left>
              <Body>
                <Text
                  style={{ color: "black", fontSize: 20, fontWeight: "bold" }}
                >
                  Order ID:{order.id}
                </Text>

                <Text>Date: {order.created_date}</Text>

                <List>{orderItems}</List>
                <CardItem>
                  <Body>
                    <Text
                      style={{
                        color: "black",
                        fontSize: 20,
                        fontWeight: "bold",
                      }}
                    >
                      summury
                    </Text>
                    <Text footer>Total: {order.total}</Text>
                    <Text footer>tax: 15%</Text>
                    <Text footer>Total after tax: {totaltax}</Text>
                  </Body>
                </CardItem>
              </Body>
            </Left>
          </CardItem>
        </Card>
      </Content>
    </ImageBackground>
  );
};

export default OrderDetail;
