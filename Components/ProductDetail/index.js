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

const ProductDetail = ({ route }) => {
  const { product } = route.params;

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
      </Content>
    </Container>
  );
};

export default ProductDetail;
