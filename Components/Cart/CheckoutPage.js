import React, {useState} from "react"
import { Content, Button, Text, Card, CardItem, Left, Body, Container } from "native-base";

import { connect } from "react-redux";
import { checkout } from "../../redux/actions";

// Components
import AddressList from "../AddressList"

const CheckoutPage = ({ navigation, user, orderCheckout }) => {

    // const items = cart.items.map(item => ({product: item.product.id, qty: item.qty}))
    const items = [{product:1, qty:3},{product:2, qty:3},{product:3, qty:3}]
    // const [order, setOrder] = useState({
    //     total: cart.total,
    //     tax: cart.tax,
    //     address: "",
    //     items: items
    // })
    const [order, setOrder] = useState({
        total: 0,
        tax: 0,
        address: "",
        items: items
    })
    const [selectedAddress, setSelectedAddress] = useState("")
    const placeOrder = () => {
        const newOrder = {...order, address:selectedAddress.id}
        setOrder(newOrder)
        console.log("newOrder ", newOrder)
        orderCheckout(newOrder)
    }

    if(!user) navigation.replace("Login")
    // if(!cart.items.length) navigation.replace("Cart")

    return (
        <Container>
        <AddressList navigation={navigation} setSelectedAddress={setSelectedAddress} checkout={true}/>
        <Content>
          <Card>
            <CardItem header>
              <Left>
                <Body>
                  {/* <Text>Total: {cart.subtotal + cart.total} SAR</Text>
                  <Text note>Subtotal: {cart.subtotal} SAR</Text>
                  <Text note>Tax: {cart.tax} SAR</Text> */}
                  <Text>Total: 0 SAR</Text>
                  <Text note>Subtotal: 0 SAR</Text>
                  <Text note>Tax: 0 SAR</Text>
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
        </Container>
    )
}

// const mapStateToProps = ({ user, cart }) => ({
//     user,
//     cart
// });
const mapStateToProps = ({ user }) => ({
    user,
    
});


const mapDispatchToProps = (dispatch) => {
    return {
        orderCheckout: (newOrder) => dispatch(checkout(newOrder)),
    };
  };

export default connect(mapStateToProps, mapDispatchToProps)(CheckoutPage);