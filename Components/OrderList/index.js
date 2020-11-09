import React from "react";
import { connect } from "react-redux";
// components
import OrderCard from "./OrderCard";

import { List, Content } from "native-base";
const OrderList = ({ navigation, orders }) => {
  // send one item from list to display in card
  const orderCards = orders.map((order) => (
    <OrderCard key={order.id} order={order} navigation={navigation} />
  ));

  return (
    <Content>
      <List>{orderCards}</List>
    </Content>
  );
};
const mapStateToProps = ({ orders }) => ({
  orders,
});

export default connect(mapStateToProps)(OrderList);
