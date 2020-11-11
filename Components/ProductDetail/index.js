import React, { useState } from "react";
import { connect } from "react-redux";
import { addItem } from "../../redux/actions"
import {
  Thumbnail,
  Text,
  Left,
  Body,
  Content,
  Card,
  CardItem,
  Container,
  Button,
  View,
  Input,
} from "native-base";
import { Image, StyleSheet } from "react-native";

const ProductDetail = ({ route, addItem, cart }) => {
  const { product } = route.params;
  let cartProduct = cart.items.find(item => item.product.id === product?.id)

  if (!cartProduct) cartProduct = { qty: 0 }

  const [item, setItem] = useState({
    product: product,
    qty: 0
  })

  const [qty, setQty] = useState(1);

  const handlePress = () => {
    const newItem = { ...item, qty: +qty }
    setItem(newItem)
    addItem(newItem)
  }

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
        <View>
          <Input
            keyboardType='numeric'
            onChangeText={setQty}
            value={qty}
          />
          <Button full onPress={() => handlePress()}>
            <Text>Add to cart</Text>
          </Button>
        </View>
      </Content>
    </Container>
  );
};
const mapStateToProps = ({ products, cart }) => ({
  products,
  cart
});

const mapDispatchToProps = (dispatch) => {
  return {
    addItem: (item) => dispatch(addItem(item)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ProductDetail);