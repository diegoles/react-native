import React, { Component } from "react";
import { StyleSheet, View, Text } from "react-native";

export default class Search extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>Search Screen!!!</Text>
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
