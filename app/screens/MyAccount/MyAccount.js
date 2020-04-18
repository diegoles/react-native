import React, { useState, useEffect } from "react";
import { StyleSheet, View, Text } from "react-native";
import { Button } from "react-native-elements";

import * as firebase from "firebase";

import MyAccountGuest from "../../components/MyAccount/MyAccountGuest";
import MyAccountUser from "../../components/MyAccount/MyAccountUser";

export default function MyAccount() {
  const [login, setLogin] = useState(false);

  // Funcion que se ejecuta al rederizar la pagina
  useEffect(() => {
    console.log("Me ejecuto tercero...");
    //console.log(this);
    // this contiene toda la informacion del objeto
    //this.props.navigation.navigate("Register");
    firebase.auth().onAuthStateChanged((user) => {
      user ? setLogin(true) : setLogin(false);
    });
  }, []);

  goToScreen = (nameScreen) => {
    console.log(nameScreen);
    this.props.navigation.navigate(nameScreen);
  };

  logout = () => {
    console.log("Cerrando sesión...");
    firebase.auth().signOut();
  };

  return login ? (
    <MyAccountUser />
  ) : (
    <MyAccountGuest goToScreen={this.goToScreen} />
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
