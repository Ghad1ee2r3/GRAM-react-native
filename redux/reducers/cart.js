import { ADD_ITEM, REMOVE_ITEM, SET_CART } from "../actions/actionTypes";
import AsyncStorage from '@react-native-async-storage/async-storage';

const initialState = {
    items: [],
    subtotal: 0,
    total: 0,
    tax: 0
};

// retrive the data from local storage
const getData = async () => {
    try {
        const myCart = await AsyncStorage.getItem('cart')
        return myCart != null ? JSON.parse(myCart) : initialState;
    } catch (error) {
        console.error(error);
        return ("something went wrong!")
    }
}
// set items in the cart
const storeData = async (item) => {
    try {
        const updatedCart = JSON.stringify(item)
        await AsyncStorage.setItem('cart', updatedCart)
    } catch (error) {
        console.error(error);
        return ("something went wrong!")
    }
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_CART:
            getData()
        case ADD_ITEM:
            // check for exixting item to update qty only or add new item
            console.log("XxxxxxxxxxxXxxxxxxxxxxxxX");
            const x = JSON.parse(action.payload)
            // console.log(action.payload);
            console.log(x.name);
            console.log("XxxxxxxxxxxXxxxxxxxxxxxxX");
            // const existingItem = state.items.find(item => item.product.id === action.payload.product.id)
            // if (existingItem) {
            //     const newQty = existingItem + action.payload
            //     const newItem = { ...existingItem, qty: newQty }
            //     const updatedItems = state.items.filter(item => item.product.id !== existingItem.product.id);
            //     items = [newItem, ...updatedItems]
            // } else {
            //     items = [...state.items, action.payload]
            // }
            // const subtotal = state.subtotal + (action.payload.qty * action.payload.product.price)
            // const tax = subtotal * 0.15
            // const total = subtotal + tax
            // const cart = { ...state, items: items, subtotal: subtotal, tax: tax, total: total };
            // storeData.bind(cart)
            // return cart;

        case REMOVE_ITEM:
            // const ritems = state.items.filter(item => item.product.id !== action.payload.product.id);
            // const rsubtotal = state.subtotal - (action.payload.qty * action.payload.product.price)
            // const rtax = rsubtotal * 0.15
            // const rtotal = rsubtotal + rtax
            // const newCart = { ...state, items: ritems, subtotal: rsubtotal, tax: rtax, total: rtotal };
            // storeData.bind(newCart)
            // return newCart;
            console.log("i do nothing");
        default:
            return state;
    }
};

export default reducer;