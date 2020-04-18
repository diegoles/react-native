import React from "react";

import { createAppContainer } from "react-navigation";
import { createBottomTabNavigator } from "react-navigation-tabs";

import { Icon } from "react-native-elements";

import homeScreenStacks from "./HomeStacks";
import topFiveScreenStacks from "./TopFiveScreenStacks";
import searchScreenStacks from "./SearchScreenStacks";
import myAccountScreenStacks from "./MyAccountScreenStacks";

const RootStack = createBottomTabNavigator(
  {
    Home: {
      screen: homeScreenStacks,
      navigationOptions: () => ({
        tabBarLabel: "Inicio.",
        tabBarIcon: ({ tintColor }) => (
          <Icon
            name="compass-outline"
            type="material-community"
            sice={22}
            color={tintColor}
          />
        ),
      }),
    },
    TopFive: {
      screen: topFiveScreenStacks,
      navigationOptions: () => ({
        tabBarLabel: "Top 5.",
        tabBarIcon: ({ tintColor }) => (
          <Icon
            name="star-outline"
            type="material-community"
            sice={22}
            color={tintColor}
          />
        ),
      }),
    },
    Search: {
      screen: searchScreenStacks,
      navigationOptions: () => ({
        tabBarLabel: "Buscar.",
        tabBarIcon: ({ tintColor }) => (
          <Icon
            name="magnify"
            type="material-community"
            sice={22}
            color={tintColor}
          />
        ),
      }),
    },
    MyAccount: {
      screen: myAccountScreenStacks,
      navigationOptions: () => ({
        tabBarLabel: "Cuenta.",
        tabBarIcon: ({ tintColor }) => (
          <Icon
            name="home-outline"
            type="material-community"
            sice={22}
            color={tintColor}
          />
        ),
      }),
    },
  },
  {
    initialRouteName: "MyAccount",
    order: ["Home", "TopFive", "Search", "MyAccount"],
    tabBarOptions: {
      inactiveTintColor: "#646464",
      activeTintColor: "#00a680",
    },
  }
);

export default createAppContainer(RootStack);
