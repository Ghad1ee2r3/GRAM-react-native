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
    Button,
} from "native-base";
import { connect } from "react-redux";
import { removeItem } from "../../redux/actions"

const ItemCard = ({ item, removeItem }) => {
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
                                <Text>{item.product.name}</Text>
                                <Text note>qty :{item.qty}</Text>
                                <Button onPress={() => removeItem(item)}><Text>Delete</Text></Button>
                            </Body>
                        </Left>
                    </CardItem>
                </Card>
            </Content>
        </ListItem>
    );
};

const mapDispatchToProps = (dispatch) => {
    return {
      removeItem: (item) =>
        dispatch(removeItem(item)),
    };
  };

export default connect(null,mapDispatchToProps)(ItemCard);