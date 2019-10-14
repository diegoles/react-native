import React, { Component } from "react";
import { StyleSheet, View, Text } from "react-native";
import { ListItem } from "react-native-elements";
import MenuConfig from "./MenuConfig";
import OverlayOneInput from "../../Elements/OverlayOneInput";

export default class UpdateUserInfo extends Component {
  constructor(state) {
    super(state);

    this.state = {
      ...state,
      overlayComponent: null,
      menuItems: MenuConfig
    };

    console.log(this.state);
  }


  
  render() {
    const { menuItems } = this.state;
    return (
      <View>
        {menuItems.map((item, index) => (
          <ListItem
            key={index}
            title={item.title}
            leftIcon={{
              type: item.iconType,
              name: item.iconNameLeft,
              color: item.iconColorLeft
            }}
            rightIcon={{
              type: item.iconType,
              name: item.iconNameRight,
              color: item.iconColorRight
            }}
            onPress={item.onPress}
            containerStyle={styles.contentContainerStyle}
          />
        ))}
        <OverlayOneInput />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  contentContainerStyle: {
    borderBottomWidth: 1,
    borderBottomColor: "#e3e3d3"
  }
});
