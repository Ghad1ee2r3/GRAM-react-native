import { ADD_ITEM, REMOVE_ITEM, SET_CART } from "../actions/actionTypes";
import { AsyncStorage } from "react-native";

const initialState = {
    items: [],
    subtotal: 0,
    total: 0,
    tax: 0
};

// set items in the cart
const storeData = async (items) => {
    try {
        // const updatedCart = JSON.stringify(items)
        // console.log(items);
        // await AsyncStorage.setItem('cart', updatedCart)
        await AsyncStorage.setItem('cart', items)
    } catch (error) {
        console.error(error);
    }
}

const getCart = async () => {
    try {
        const cart = await AsyncStorage.getItem('cart')
        return cart
        
    } catch (error) {
        console.error(error);
    }
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_CART:
            return initialState
            // const myCart = getCart()
            // if(myCart){
            //     // const myNewCart = JSON.parse(myCart)
            //     return myCart
            // }
        case ADD_ITEM:
            // check for exixting item to update qty only or add new item
            let items
            const existingItem = state.items.find(item => item.product.id === action.payload.product.id)
            if(existingItem){
                const newQty = existingItem.qty + action.payload.qty
                const newItem = {...existingItem, qty:newQty}
                const updatedItems = state.items.filter(item => item.product.id !== existingItem.product.id);
                items = [newItem,...updatedItems]
            }else{
                items = [...state.items, action.payload]
            }
            // update total, subtotal and tax
            const subtotal = state.subtotal + (action.payload.qty * action.payload.product.price)
            const tax = subtotal * 0.15
            const total = subtotal + tax
            const cart = {...state, items: items, subtotal: subtotal, tax: tax, total: total};
            // storeData(cart)
            return cart;

        case REMOVE_ITEM:
            const ritems = state.items.filter(item => item.product.id !== action.payload.product.id);
            const rsubtotal = state.subtotal - (action.payload.qty * action.payload.product.price)
            const rtax = rsubtotal * 0.15
            const rtotal = rsubtotal + rtax
            const newCart = {...state, items: ritems, subtotal: rsubtotal, tax: rtax, total: rtotal};
            // storeData("cart", newCart)
            return newCart;
        default:
            return state;
    }
};

export default reducer;