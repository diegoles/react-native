import React, { Component } from "react";
import { StyleSheet, View, Text, ActivityIndicator } from "react-native";
import { Button, Image } from "react-native-elements";

export default class MyAccountGuest extends Component {
  constructor(props) {
    super(props);
    console.log(props);
  }

  render() {
    const { goToScreen } = this.props;

    return (
      <View style={styles.viewBody}>
        <Image
          source={require("../../../assets/img/image-my-account-guest-01.jpg")}
          style={styles.image}
          PlaceholderContent={<ActivityIndicator />}
          resizeMode="contain"
        />
        <Text style={styles.title}>Consulta tu perfil de la APP</Text>
        <Text style={styles.description}>
          Lorem Ipsum es simplemente el texto de relleno de las imprentas y
          archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar de
          las industrias desde el año 1500, cuando un impresor (N. del T.
          persona que se dedica a la imprenta) desconocido usó una galería de
          textos y los mezcló de tal manera que logró hacer un libro de textos
          especimen. No sólo sobrevivió 500 años, sino que tambien ingresó como
          texto de relleno en documentos electrónicos, quedando esencialmente
          igual al original. Fue popularizado en los 60s con la creación de las
          hojas "Letraset", las cuales contenian pasajes de Lorem Ipsum, y más
          recientemente con software de autoedición, como por ejemplo Aldus
          PageMaker, el cual incluye versiones de Lorem Ipsum.
        </Text>
        <Button
          buttonStyle={styles.btnViewProfile}
          title="Ver tu perfil"
          onPress={() => goToScreen("Login")}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  viewBody: {
    flex: 1,
    paddingLeft: 30,
    paddingRight: 30,
    justifyContent: "center"
  },
  image: {
    height: 300,
    marginBottom: 40
  },
  title: {
    fontWeight: "bold",
    fontSize: 19,
    marginBottom: 10,
    textAlign: "center"
  },
  description: {
    textAlign: "center",
    marginBottom: 20
  },
  btnViewProfile: {
    width: "100%",
    backgroundColor: "#00a680"
  }
});