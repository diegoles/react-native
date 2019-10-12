import React, { Component } from "react";
import { StyleSheet, View, Text, ActivityIndicator } from "react-native";
import { Image, Button } from "react-native-elements";

import t from "tcomb-form-native";
const Form = t.form.Form;
import { LoginStruct, LoginOptions } from "../../forms/Login";

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
    } else {
      console.log("Formulario incorrecto...");
      this.setState({
        loginErrorMessage: "Los datos del formulario son errones"
      });
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
  }
});
