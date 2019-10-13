import React, { Component } from "react";
import { StyleSheet, View, Text, ActivityIndicator } from "react-native";
import { Image, Button, SocialIcon, Divider } from "react-native-elements";

import t from "tcomb-form-native";
const Form = t.form.Form;
import { LoginStruct, LoginOptions } from "../../forms/Login";

import * as firebase from "firebase";
import Toast, { DURATION } from "react-native-easy-toast";

import * as Facebook from "expo-facebook";
import FacebookApi from "../../utils/Social";

export default class Login extends React.Component {
  constructor() {
    super();

    this.state = {
      loginOptions: LoginOptions,
      loginStruct: LoginStruct,
      loginData: {
        email: "",
        password: ""
      },
      loginErrorMessage: ""
    };
  }

  login = () => {
    console.log("Haciendo login..");
    console.log(this.state.loginData);
    const validate = this.refs.loginForm.getValue();
    if (validate) {
      console.log("Logueando...");
      this.setState({
        loginErrorMessage: ""
      });

      firebase
        .auth()
        .signInWithEmailAndPassword(validate.email, validate.password)
        .then(resolve => {
          console.log("Logueo correcto...");
          this.refs.toast.show("Logueo correcto...", 200, () => {
            //this.props.navigation.navigate("MyAccount");
            this.props.navigation.goBack();
          });
        })
        .catch(error => {
          console.log("Logueo incorrecto...");
          /*
          // Se comenta por motivos de seguridad, no es bueno saber si un usuario esta en nuestros registros.
          if ("auth/user-not-found" === error.code) {
            this.refs.toast.show("El usuario no existe...", 2500);
          } else if ("auth/wrong-password" === error.code) {
            this.refs.toast.show("La contraseña es incorrecta...", 2500);
          }*/
          this.refs.toast.show("Logueo incorrecto revise sus datos...", 2500);
        });
    } else {
      console.log("Formulario incorrecto...");
      this.setState({
        loginErrorMessage: "Los datos del formulario son errones"
      });
    }
  };

  loginFacebook = async function logIn() {
    try {
      const {
        type,
        token,
        expires,
        permissions,
        declinedPermissions
      } = await Facebook.logInWithReadPermissionsAsync(
        FacebookApi.aplicationId,
        {
          permissions: FacebookApi.permissions
        }
      );
      if (type === "success") {
        // Get the user's name using Facebook's Graph API
        const response = await fetch(
          `https://graph.facebook.com/me?access_token=${token}`
        );
        Alert.alert("Logged in!", `Hi ${(await response.json()).name}!`);
      } else {
        // type === 'cancel'
      }
    } catch ({ message }) {
      alert(`Facebook Login Error: ${message}`);
    }
  };

  onChangeFormLogin = formValue => {
    console.log("Change Form Login..");
    console.log(formValue);
    this.setState({
      loginData: formValue
    });
  };

  render() {
    const { loginStruct, loginOptions, loginErrorMessage } = this.state;

    return (
      <View style={styles.viewBody}>
        <Text>Login Screen!!!</Text>
        <Image
          source={require("../../../assets/img/5-tenedores-letras-icono-logo.png")}
          containerStyle={styles.containerLogo}
          style={styles.logo}
          PlaceholderContent={<ActivityIndicator />}
          resizeMode="contain"
        />

        <View style={styles.viewForm}>
          <Form
            ref="loginForm"
            type={loginStruct}
            options={loginOptions}
            value={this.state.loginData}
            onChange={formValue => this.onChangeFormLogin(formValue)}
          />
          <Button
            buttonStyle={styles.buttonLoginContainer}
            title="Login"
            onPress={() => this.login()}
          />
          <Divider style={styles.divider} />
          <SocialIcon
            title="Entrar con Facebook"
            button
            type="facebook"
            onPress={() => this.loginFacebook()}
          />
          <Toast
            ref="toast"
            style={{ backgroundColor: "gray" }}
            position="top"
            positionValue={200}
            fadeInDuration={750}
            fadeOutDuration={1000}
            opacity={0.8}
            textStyle={{ color: "#fff" }}
          />
          <Text style={styles.loginErrorMessage}>{loginErrorMessage}</Text>
        </View>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  viewBody: {
    flex: 1,
    marginTop: 40,
    marginLeft: 40,
    marginRight: 40
  },
  containerLogo: {
    alignItems: "center"
  },
  logo: {
    width: 300,
    height: 150
  },
  viewForm: {
    marginTop: 50
  },
  buttonLoginContainer: {
    backgroundColor: "#00a680",
    marginTop: 20,
    marginLeft: 10,
    marginRight: 10
  },
  loginErrorMessage: {
    color: "#f00",
    textAlign: "center",
    marginTop: 30
  },
  divider: {
    backgroundColor: "#00a680",
    marginBottom: 20
  }
});
