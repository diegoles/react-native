import React, { Component } from "react";
import { StyleSheet, View, Text } from "react-native";
import { Button } from "react-native-elements";

export default class MyAccount extends React.Component {
  /*
  // Funcion que se ejecuta al rederizar la pagina
  componentDidMount() {
    console.log(this);
    // this contiene toda la informacion del objeto
    this.props.navigation.navigate("Register");
  }*/

  goToScreen = nameScreen => {
    console.log(nameScreen);
    this.props.navigation.navigate(nameScreen);
  };

  render() {
    return (
      <View style={styles.container}>
        <Text>MyAccount Screen!!!</Text>
        <Button
          title="Registrar"
          onPress={() => this.goToScreen("Register")}
        />
        <Button
          title="Login."
          onPress={() => this.goToScreen("Login")}
        />
      </View>
    );
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
