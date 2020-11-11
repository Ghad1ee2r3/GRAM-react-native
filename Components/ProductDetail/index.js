import React from "react";
import {
  Thumbnail,
  Text,
  Left,
  Body,
  Content,
  Card,
  CardItem,
  Container,
} from "native-base";
import { Image, StyleSheet } from "react-native";

const ProductDetail = ({ route }) => {
  const { product } = route.params;

  //display list of images product
  const productImage = product.images.map((image) => (
    <Thumbnail key={image} source={{ uri: image }} />
  ));
  console.log(product.images[0]);

  return (
    <Container>
      <Content>
        <Card style={{ flex: 0 }}>
          <CardItem header>
            <Left>
              <Body>
                <Image
                  source={{
                    uri: product.image,
                  }}
                  style={{ height: 400, width: 400, flex: 1 }}
                />

                <Text>{product.name}</Text>
                <Text note>Price:{product.price} SAR</Text>

                <Text
                  note
                  style={{ color: product.stock > 0 ? "green" : "red" }}
                >
                  available:{" "}
                  {product.stock > 0 ? product.stock : "out of stock "}
                </Text>
                <Text note>Description :{product.description}</Text>
              </Body>
            </Left>
          </CardItem>
          {productImage}
        </Card>
      </Content>
    </Container>
  );
};

export default ProductDetail;
