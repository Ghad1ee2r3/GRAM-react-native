import { AsyncStorage } from "react-native";
import decode from "jwt-decode";

import { SET_CURRENT_USER } from "./actionTypes";

import { instance } from "./instance";

// import { SHOP } from "../../Navigation/Screennames";

const setCurrentUser = (token) => async (dispatch) => {
  await setAuthToken(token);
  dispatch({
    type: SET_CURRENT_USER,
    payload: token ? decode(token) : null,
  });
};

const setAuthToken = (token) => {
  if (token) {
    Cookies.set("token", token);
    instance.defaults.headers.Authorization = `Bearer ${token}`;
  } else {
    delete instance.defaults.headers.Authorization;
    Cookies.remove("token");
  }
};

export const login = (userData, navigation) => async (dispatch) => {
  try {
    const res = await instance.post(`login/`, userData);
    const { token } = res.data;
    dispatch(setCurrentUser(token));
    // navigation.navigate(SHOP);
  } catch (error) {
    console.error("Error while logging in", error);
  }
};

export const signup = (userData, navigation) => async (dispatch) => {
  try {
    await instance.post(`register/`, userData);
    dispatch(login(userData, navigation));
  } catch (error) {
    console.error("Error while signing up", error);
    console.error(error.response.data);
  }
};

export const logout = () => setCurrentUser();

export const checkForToken = () => async (dispatch) => {
  const currentTimeInSeconds = Date.now() / 1000;
  const token = await AsyncStorage.getItem("token");

  if (token && decode(token).exp >= currentTimeInSeconds)
    dispatch(setCurrentUser(token));
  else setAuthToken();
};
