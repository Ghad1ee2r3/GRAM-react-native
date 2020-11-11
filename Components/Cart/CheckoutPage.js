import React, {useState} from "react"
import { Content, Button, Text, Card, CardItem, Left, Body, Container } from "native-base";

import { connect } from "react-redux";
import { checkout } from "../../redux/actions";

// Components
import AddressList from "../AddressList"

const CheckoutPage = ({ navigation, user, orderCheckout, cart }) => {

    const items = cart.items.map(item => ({product: item.product.id, qty: item.qty}))
    const [order, setOrder] = useState({
        total: cart.total,
        tax: cart.tax,
        address: "",
        items: items
    })
    const [selectedAddress, setSelectedAddress] = useState("")
    const placeOrder = () => {
        const newOrder = {...order, address:selectedAddress.id}
        setOrder(newOrder)
        orderCheckout(newOrder, navigation)
    }

    if(!user) navigation.replace("Login")
    if(!cart.items.length) navigation.replace("Cart")

    return (
        <Container>
        <AddressList navigation={navigation} setSelectedAddress={setSelectedAddress} checkout={true}/>
        <Content>
          <Card>
            <CardItem header>
              <Left>
                <Body>
                  <Text>Total: {cart.subtotal + cart.total} SAR</Text>
                  <Text note>Subtotal: {cart.subtotal} SAR</Text>
                  <Text note>Tax: {cart.tax} SAR</Text>
                </Body>
              </Left>
            </CardItem>
          </Card>
        </Content>
        {
            selectedAddress? (
                <Button onPress={placeOrder}><Text>Place order</Text></Button>
            ):
            null
        }
        <Button onPress={() => navigation.replace("Cart")}><Text>Cancel</Text></Button> 
        </Container>
    )
}

const mapStateToProps = ({ user, cart }) => ({
    user,
    cart
});

const mapDispatchToProps = (dispatch) => {
    return {
        orderCheckout: (newOrder, navigation) => dispatch(checkout(newOrder, navigation)),
    };
  };

export default connect(mapStateToProps, mapDispatchToProps)(CheckoutPage);