import React, { useState } from "react";
import { connect } from "react-redux";
import { addItem } from "../../redux/actions"
import ItemCard from "./CartItemCard"
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

const Cart = ({ cart }) => {
    let items = cart.items
    const itemCards = items.map((item) => (
        <ItemCard key={item.id} item={item} />
    ));

    return (
        <Container>
            <Content>
                <Card style={{ flex: 0 }}>
                    <CardItem header>
                        <Left>
                            <Body>
                                <Text>THIS IS THE CART</Text>
                            </Body>
                            <Text>{itemCards}</Text>
                        </Left>
                    </CardItem>
                </Card>
            </Content>
        </Container>
    );
};
const mapStateToProps = ({ cart }) => ({
    cart
});


export default connect(mapStateToProps)(Cart);
