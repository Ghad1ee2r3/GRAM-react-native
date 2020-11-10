import React from "react";
import {
    Header,
    Content,
    Card,
    CardItem,
    Text,
    Left,
    Body,
    ListItem,
} from "native-base";

const ItemCard = ({ item }) => {
    return (
        <ListItem
            button
            onPress={() => { alert("meh") }}
        >
            <Content>
                <Card>
                    <Header />
                    <CardItem header>
                        <Left>
                            <Body>
                                <Text>{item.uuid}</Text>
                                <Text note>qty :{item.qty}</Text>
                            </Body>
                        </Left>
                    </CardItem>
                </Card>
            </Content>
        </ListItem>
    );
};

export default ItemCard;
