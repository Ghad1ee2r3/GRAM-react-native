import React from "react";
import { connect } from "react-redux";
import { List, Content } from "native-base";

// components
import ProductCard from "./ProductCard";

const ProductsList = ({ navigation, products }) => {
  // send one item from list to display in card
  const productCards = products.map((product) => (
    <ProductCard key={product.id} product={product} navigation={navigation} />
  ));

  return (
    <Content>
      <List>{productCards}</List>
    </Content>
  );
};

const mapStateToProps = ({ products }) => ({
  products,
});

export default connect(mapStateToProps)(ProductsList);
