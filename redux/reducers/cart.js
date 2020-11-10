import { ADD_ITEM, REMOVE_ITEM, SET_CART } from "../actions/actionTypes";
import AsyncStorage from '@react-native-async-storage/async-storage';

const initialState = {
    items: [],
    subtotal: 0,
    total: 0,
    tax: 0
};

// set items in the cart
const storeData = async (items) => {
    try {
        const updatedCart = JSON.stringify(items)
        // console.log(items);
        await AsyncStorage.setItem('cart', updatedCart)
    } catch (error) {
        console.error(error);
    }
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_CART:
            // console.log("----- pay load",action.payload);
            return {...state, items: [...action.payload], total:5};
        case ADD_ITEM:
            // check for exixting item to update qty only or add new item
            console.log("init state", state);
            // check if the item exists in the array if yes update qty of the item
            let newItems = [...state.items, action.payload]
            storeData(newItems)
            return {...state, items: newItems}
            const existingItem = state.items.find(item => item.product.id === action.payload.product.id)
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
            return state;

            // console.log("i do nothing");
        default:
            return state;
    }
};

export default reducer;