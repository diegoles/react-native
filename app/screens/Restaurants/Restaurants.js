import * as firebase from "firebase";
import React, { useEffect, useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import ActionButton from "react-native-action-button";

export default function Restaurants(props) {
  console.log(props);
  const { navigation } = props;
  const [user, setUser] = useState(null);

  useEffect(() => {
    firebase.auth().onAuthStateChanged((userInfo) => {
      setUser(userInfo);
    });
  }, []);
  return (
    <View style={styles.viewBody}>
      <Text>Restaurants Screen!!!</Text>
      {user && <AddRestaurantButton navigation={navigation} />}
    </View>
  );
}

AddRestaurantButton = (props) => {
  console.log(props);
  const { navigation } = props;

  return (
    <ActionButton
      buttonColor="#00a680"
      onPress={() => {
        navigation.navigate("AddRestaurant");
      }}
    ></ActionButton>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  viewBody: {
    flex: 1,
  },
});
