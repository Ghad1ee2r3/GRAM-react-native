import React from "react";
import { connect } from "react-redux";
// components
import OrderCard from "./OrderCard";
import { ImageBackground, View } from "react-native";

// Style
import styles from "./styles";

import { List, Content } from "native-base";
const OrderList = ({ navigation, orders }) => {
  // send one item from list to display in card
  const orderCards = orders.map((order) => (
    <OrderCard key={order.id} order={order} navigation={navigation} />
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
        <List>{orderCards}</List>
      </Content>
    </ImageBackground>
  );
};
const mapStateToProps = ({ orders }) => ({
  orders,
});

export default connect(mapStateToProps)(OrderList);
