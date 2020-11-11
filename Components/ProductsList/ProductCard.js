import React from "react";
import {
  Content,
  Card,
  CardItem,
  Thumbnail,
  Text,
  Left,
  Body,
  ListItem,
} from "native-base";
import { Image, StyleSheet } from "react-native";

const ProductCard = ({ product, navigation }) => {
  console.log("product");
  console.log(product);
  return (
    <ListItem
      button
      onPress={() => navigation.navigate("ProductDetail", { product })}
    >
      <Content>
        <Card>
          <CardItem header>
            <Body>
              <Image
                source={{
                  uri: product.image,
                }}
                style={{ height: 400, width: 300, flex: 1 }}
              />
              <Text>{product.name}</Text>
              <Text note>{product.price}</Text>
            </Body>
          </CardItem>
        </Card>
      </Content>
    </ListItem>
  );
};

export default ProductCard;
