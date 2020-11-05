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

import { StyleSheet } from "react-native";

const ProductCard = ({ product, navigation }) => {
  return (
    <ListItem
      button
      onPress={() => navigation.navigate("ProductDetail", { product })}
      style={styles.listitem}
    >
      <Container>
        <Header />
        <Content>
          <Card style={{ flex: 0 }}>
            <CardItem header>
              <Left>
                <Thumbnail source={product.image} />
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
