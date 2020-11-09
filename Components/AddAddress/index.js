import React, { useState } from "react";

// Styling Components
import { TextInput, TouchableOpacity, View } from "react-native";
import { Text } from "native-base";
import styles from "./styles";
import { connect } from "react-redux"
import { addAddress } from "../../redux/actions"

const AddAddress = ({ navigation, user, countries, addAddress }) => {

    const [address, setAddress] = useState({
    first_name: "",
    last_name: "",
    phone: "",
    country: "",
    city: "",
    address_line_1: "",
    address_line_2: "",
    address_type: "",
  });

  //////////////////////////
  const options = countries.map(country => 
        <option value={country.id}>{country.name}</option>)
    /////////////////////////

  const submitAddress = () => {
    addAddress(address);
  };

  const textChangeHandler = (event) => {
    setAddress({...address, [event.target.name]:event.target.value})
  }

  if(!user) navigation.replace("Login")

  return (
    <View style={styles.authContainer}>
      <Text style={styles.authTitle}>Login</Text>
      <TextInput
        style={styles.authTextInput}
        placeholder="First name"
        placeholderTextColor="#A6AEC1"
        value={address.first_name}
        name="first_name"
        onChangeText={textChangeHandler}
        autoCapitalize="none"
      />
      <TextInput
        style={styles.authTextInput}
        placeholder="Last name"
        placeholderTextColor="#A6AEC1"
        value={address.last_name}
        name="last_name"
        onChangeText={textChangeHandler}
        autoCapitalize="none"
        secureTextEntry={true}
      />
      <TextInput
        style={styles.authTextInput}
        placeholder="Phone"
        placeholderTextColor="#A6AEC1"
        value={address.phone}
        name="phone"
        onChangeText={textChangeHandler}
        autoCapitalize="none"
        secureTextEntry={true}
      />
      <TextInput
        style={styles.authTextInput}
        placeholder="Country"
        placeholderTextColor="#A6AEC1"
        value={address.country}
        name="country"
        onChangeText={textChangeHandler}
        autoCapitalize="none"
        secureTextEntry={true}
      />
      <TextInput
        style={styles.authTextInput}
        placeholder="City"
        placeholderTextColor="#A6AEC1"
        value={address.city}
        name="city"
        onChangeText={textChangeHandler}
        autoCapitalize="none"
        secureTextEntry={true}
      />
      <TextInput
        style={styles.authTextInput}
        placeholder="Address line 1"
        placeholderTextColor="#A6AEC1"
        value={address.address_line_1}
        name="address_line_1"
        onChangeText={textChangeHandler}
        autoCapitalize="none"
        secureTextEntry={true}
      />
      <TextInput
        style={styles.authTextInput}
        placeholder="Address line 2"
        placeholderTextColor="#A6AEC1"
        value={address.address_line_2}
        name="address_line_2"
        onChangeText={textChangeHandler}
        autoCapitalize="none"
        secureTextEntry={true}
      />
      <TextInput
        style={styles.authTextInput}
        placeholder="Address type"
        placeholderTextColor="#A6AEC1"
        value={address.address_type}
        name="address_type"
        onChangeText={textChangeHandler}
        autoCapitalize="none"
        secureTextEntry={true}
      />
      <TouchableOpacity
        style={styles.authButton}
        onPress={submitAddress}
      >
        <Text style={styles.authButtonText}>Add</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.authButton}
        onPress={() => navigation.replace("AddressList")}
      >
        <Text style={styles.authButtonText}>Cancel</Text>
      </TouchableOpacity>
    </View>
  );
};

const mapStateToProps = ({ user, countries }) => ({ user, countries });

const mapDispatchToProps = (dispatch) => {
  return {
    addAddress: (newAddress, history) =>
      dispatch(addAddress(newAddress, history)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(AddAddress);