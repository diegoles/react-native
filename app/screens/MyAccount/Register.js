import React, { Component } from "react";
import { StyleSheet, View } from "react-native";
import { Button, Text } from "react-native-elements";

import t from "tcomb-form-native";
const Form = t.form.Form;
import { RegisterStruct, RegisterOptions } from "../../forms/Register";
import * as firebase from "firebase";
import Toast, { DURATION } from "react-native-easy-toast";

export default class Register extends React.Component {
  constructor() {
    super();

    this.state = {
      registerStruct: RegisterStruct,
      registerOptions: RegisterOptions,
      formData: {
        name: "",
        email: "",
        password: "",
        passwordConfirmation: ""
      },
      formErrorMessage: ""
    };
  }

  register = () => {
    console.log("Intento de Registro...");

    const { password, passwordConfirmation } = this.state.formData;

    if (password === passwordConfirmation) {
      console.log("Contraseñas iguales.");
      const validate = this.refs.registerForm.getValue();
      if (validate) {
        console.log("Formulario correcto.");
        this.setState({
          formErrorMessage: ""
        });

        firebase
          .auth()
          .createUserWithEmailAndPassword(validate.email, validate.password)
          .then(resolve => {
            console.log("Registro correcto...");
            this.refs.toast.show("Registro correcto...", 200, () => {
              //this.props.navigation.navigate("MyAccount");
              this.props.navigation.goBack();
            });
          })
          .catch(error => {
            console.log("Email ya esta en uso...");
            this.refs.toast.show("Email ya esta en uso...", 2500);
          });
      } else {
        console.log("Formulario inválido.");
        this.setState({
          formErrorMessage: "Formulario inválido..."
        });
      }
    } else {
      console.log("Contraseñas no son iguales.");
      this.setState({
        formErrorMessage: "Contraseñas no son iguales..."
      });
    }

    const validate = this.refs.registerForm.getValue();
    console.log(this.state.formData);
  };

  onChangeFormRegister = formValue => {
    console.log("Cambio......");
    this.setState({
      formData: formValue
    });
    console.log(this.state.formData);
  };

  render() {
    const { registerStruct, registerOptions, formErrorMessage } = this.state;
    return (
      <View style={styles.viewBody}>
        <Text>Register Screen!!!</Text>
        <Form
          ref="registerForm"
          type={registerStruct}
          options={registerOptions}
          value={this.state.formData}
          onChange={formValue => this.onChangeFormRegister(formValue)}
        />
        <Button
          buttonStyle={styles.buttomRegisterContainer}
          title="Unirme"
          onPress={() => this.register()}
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

        <Text style={styles.formErrorMessage}>{formErrorMessage}</Text>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  viewBody: {
    flex: 1,
    justifyContent: "center",
    marginLeft: 40,
    marginRight: 40
  },
  buttomRegisterContainer: {
    backgroundColor: "#00a680",
    marginTop: 20,
    marginLeft: 10,
    marginRight: 10
  },
  formErrorMessage: {
    color: "#f00",
    textAlign: "center",
    marginTop: 30
  }
});
