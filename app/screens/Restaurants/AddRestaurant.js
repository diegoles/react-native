import React, { useRef } from "react";
import { View } from "react-native";
import Toast from "react-native-easy-toast";
import AddRestaurantForm from "../../components/Restaurants/AddRestaurantForm";

export default function AddRestaurant(props) {
  const { navigation } = props;
  const toastRef = useRef();
  return (
    <View>
      <AddRestaurantForm
        toastRef={toastRef}
        navigation={navigation}
      />

      <Toast ref={toastRef} position="center" opacity={0.5} />
    </View>
  );
}
