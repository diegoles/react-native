import React, { Component } from "react";
import { StyleSheet, View, Text, ActivityIndicator } from "react-native";

import { Image } from "react-native-elements";

export default class Login extends React.Component {
  render() {
    return (
      <View style={styles.viewBody}>
        <Text>Login Screen!!!</Text>
        <Image
          source={require("../../../assets/img/5-tenedores-letras-icono-logo.png")}
          style={styles.logo}
          PlaceholderContent={<ActivityIndicator />}
          resizeMode="contain"
        />
      </View>
    );
  }
}
const styles = StyleSheet.create({
  viewBody: {
    flex: 1,
    marginTop: 40,
    marginLeft: 40,
    marginRight: 40,
    alignItems: "center"
  },
  logo: {
    width: 300,
    height: 150
  }
});
