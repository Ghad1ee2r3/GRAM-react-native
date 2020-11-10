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
        await AsyncStorage.setItem('cart', updatedCart)
    } catch (error) {
        console.error(error);
    }
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_CART:
            return {...state, items: [...action.payload], total:5};
        case ADD_ITEM:
            // check for exixting item to update qty only or add new item
            let newItems 
            const existingItem = state.items.find(item => item.product.id === action.payload.product.id)
            if (existingItem) {
                const newQty = existingItem.qty + action.payload.qty
                const newItem = { ...existingItem, qty: newQty }
                const updatedItems = state.items.filter(item => item.product.id !== existingItem.product.id);
                newItems = [newItem, ...updatedItems]
            } else {
                newItems = [...state.items, action.payload]
                // items = [...state.items, action.payload]
            }
            const subtotal = state.subtotal + (action.payload.qty * action.payload.product.price)
            const tax = subtotal * 0.15
            const total = subtotal + tax
            const cart = { ...state, items: newItems, subtotal: subtotal, tax: tax, total: total };
            storeData.bind(cart)
            storeData(newItems)
            return {...state, items: newItems}

        case REMOVE_ITEM:
            // const ritems = state.items.filter(item => item.product.id !== action.payload.product.id);
            // const rsubtotal = state.subtotal - (action.payload.qty * action.payload.product.price)
            // const rtax = rsubtotal * 0.15
            // const rtotal = rsubto    tal + rtax
            // const newCart = { ...state, items: ritems, subtotal: rsubtotal, tax: rtax, total: rtotal };
            // storeData.bind(newCart)
            return state;

        default:
            return state;
    }
};

export default reducer;