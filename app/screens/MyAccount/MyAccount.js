import React, { Component } from "react";
import { StyleSheet, View, Text } from "react-native";
import { Button } from "react-native-elements";

import * as firebase from "firebase";

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
      }
    });
  }

  goToScreen = nameScreen => {
    console.log(nameScreen);
    this.props.navigation.navigate(nameScreen);
  };

  render() {
    console.log("Me ejecuto segundo...");
    <Text>MyAccount Screen!!!</Text>;
    const { login } = this.state;
    if (login) {
      return <Text>Estas logueado correctamente....</Text>;
    } else {
      return (
        <View style={styles.container}>
          <Button
            title="Registrar."
            onPress={() => this.goToScreen("Register")}
          />
          <Button title="Login." onPress={() => this.goToScreen("Login")} />
        </View>
      );
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
