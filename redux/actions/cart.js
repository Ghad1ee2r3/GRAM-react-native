import AsyncStorage from "@react-native-async-storage/async-storage";
import { ADD_ITEM, REMOVE_ITEM, SET_CART } from "./actionTypes";

export const addItem = (item) => {
    return {
        type: ADD_ITEM,
        payload: item,
    }
}

export const removeItem = (item) => {
    return {
        type: REMOVE_ITEM,
        payload: item,
    }
}

export const setCart = () => {
    return async (dispatch) => {
        let result = []
        const items = await AsyncStorage.getItem('cart')
        result = items !== null ? JSON.parse(items) : [];
        return dispatch({
            type: SET_CART,
            payload: result
        })
    }
    // retrive the data from local storage

}