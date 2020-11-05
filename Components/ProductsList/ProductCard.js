// NativeBase Components
import React from "react";
import {
  Container,
  Header,
  Content,
  Card,
  CardItem,
  Thumbnail,
  Text,
  Button,
  Icon,
  Left,
  Body,
  ListItem,
} from "native-base";

const ProductCard = ({ product, navigation }) => {
  return (
    <ListItem
      button
      onPress={() => navigation.navigate("ProductDetail", { product })}
    >
      <Container>
        <Header />
        <Content>
          <Card >
            <CardItem header>
              <Left>
              <Thumbnail source={{uri: product.image}} />
                <Body>
                  <Text>{product.name}</Text>
                  <Text note>{product.price}</Text>
                </Body>
              </Left>
            </CardItem>
          </Card>
        </Content>
      </Container>
    </ListItem>
  );
};

export default ProductCard;
