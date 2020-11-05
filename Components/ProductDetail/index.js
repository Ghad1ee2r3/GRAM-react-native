import React, { useState } from "react";
import {
  Thumbnail,
  Text,
  Button,
  Left,
  Body,
  Right,
  List,
  ListItem,
  Picker,
  Content,
  Card,
  CardItem,
  Container,
} from "native-base";
//import { connect } from "react-redux";

const ProductDetail = ({ route }) => {
  // const { productID } = useParams();
  const { product } = route.params;

  // const product = products.find((product) => product.id === +productID);
  // if (!product) return <Redirect to="/products/" />;

  //display list of images product
  const productImage = product.images.map((image) => (
      <Thumbnail key={image} source={{uri: image}} />
  ));

  return (
    <Container>
      <Content>
        <Card style={{ flex: 0 }}>
          <CardItem header>
            <Left>
              <Thumbnail source={{uri: product.image}} />
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
// const mapStateToProps = ({ products }) => ({
//   products,
// });

// export default connect(mapStateToProps)(ProductDetail);
export default ProductDetail;
