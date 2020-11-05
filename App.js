import { StatusBar } from "expo-status-bar";
import React from "react";
import { Header, StyleSheet, Text, View } from "react-native";
import { Spinner, Container } from "native-base";
import { Ionicons } from "@expo/vector-icons";
import { useFonts } from "expo-font";

// Navigation
import RootNavigator from "./Navigation";
import { NavigationContainer } from "@react-navigation/native";

// Redux
import { Provider } from "react-redux";
import store from "./redux";
import ProductsList from "./Components/ProductsList";

export default function App() {
  return (
    // <Text> React Native</Text>
    // <ProductsList />
    <Provider store={store}>
      <NavigationContainer>
        <Container>
          <Header />
          <RootNavigator />
        </Container>
      </NavigationContainer>
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});

//export default App;
