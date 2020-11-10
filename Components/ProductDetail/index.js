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

const ProductDetail = ({ route, addItem, cart }) => {
  const { product } = route.params;

  let cartProduct = cart.items.find(item => item.product.id === product?.id)
  if (!cartProduct) cartProduct = { qty: 0 }

  const [item, setItem] = useState({
    product: product,
    qty: qty
  })

  const [qty, setQty] = useState(1);

  const handleQtyChange = (newQty) => {
    setQty(newQty);
  }



  const handlePress = () => {
    alert(`added to cart ${product.name}`)
    // console.log(item);
    setItem({ ...item, qty: qty })
    addItem(item)
  }

  //display list of images product
  const productImage = product.images.map((image) => (
    <Thumbnail key={image} source={{ uri: image }} />
  ));

  return (
    <Container>
      <Content>
        <Card style={{ flex: 0 }}>
          <CardItem header>
            <Left>
              <Thumbnail source={{ uri: product.image }} />
              <Body>
                <Text>{product.name}</Text>
                <Text note>{product.price}</Text>
                <Text note>description :{product.description}</Text>
                <Text note>stock: {product.stock}</Text>
              </Body>
            </Left>
          </CardItem>
          {productImage}
        </Card>
        <View>
          <Input
            placehodler="qty"
            keyboardType='numeric'
            onChangeText={() => handleQtyChange(qty)}
            value={qty}
          />
          <Button full onPress={() => handlePress(product)}>
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
