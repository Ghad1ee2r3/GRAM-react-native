import React from "react";
import { connect } from "react-redux";
import { List, Content, Thumbnail, Image } from "native-base";
import { ImageBackground, View } from "react-native";

// components
import ProductCard from "./ProductCard";
// Style
import styles from "./styles";

const ProductsList = ({ navigation, products }) => {
  // send one item from list to display in card
  const productCards = products.map((product) => (
    <ProductCard key={product.id} product={product} navigation={navigation} />
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
        <List>{productCards}</List>
      </Content>
    </ImageBackground>
  );
};

const mapStateToProps = ({ products }) => ({
  products,
});

export default connect(mapStateToProps)(ProductsList);
