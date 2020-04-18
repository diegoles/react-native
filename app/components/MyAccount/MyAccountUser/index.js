import React, { Component } from "react";
import { StyleSheet, View } from "react-native";

import UserInfo from "./UserInfo";

export default class MyAccountUser extends Component {
  render() {
    return (
      <View>
        <UserInfo />
      </View>
    );
  }
}

const styles = StyleSheet.create({});
