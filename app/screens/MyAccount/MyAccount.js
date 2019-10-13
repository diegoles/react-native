import React, { Component } from "react";
import { StyleSheet, View, Text } from "react-native";
import { Button } from "react-native-elements";

import * as firebase from "firebase";

import MyAccountGuest from "../../components/MyAccount/MyAccountGuest";
import MyAccountUser from "../../components/MyAccount/MyAccountUser";

export default class MyAccount extends React.Component {
  constructor() {
    super();
    console.log("Me ejecuto primero...");

    this.state = {
      login: false
    };
  }

  // Funcion que se ejecuta al rederizar la pagina
  async componentDidMount() {
    console.log("Me ejecuto tercero...");
    //console.log(this);
    // this contiene toda la informacion del objeto
    //this.props.navigation.navigate("Register");

    await firebase.auth().onAuthStateChanged(user => {
      if (user) {
        this.setState({
          login: true
        });
      } else {
        this.setState({
          login: false
        });
      }
    });
  }

  goToScreen = nameScreen => {
    console.log(nameScreen);
    this.props.navigation.navigate(nameScreen);
  };

  logout = () => {
    console.log("Cerrando sesión...");
    firebase.auth().signOut();
  };

  render() {
    console.log("Me ejecuto segundo...");
    <Text>MyAccount Screen!!!</Text>;
    const { login } = this.state;
    if (login) {
      return <MyAccountUser/>;
    } else {
      return <MyAccountGuest goToScreen={this.goToScreen} />;
    }
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center"
  }
});
