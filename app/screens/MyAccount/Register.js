import React, { Component } from "react";
import { StyleSheet, View, Text } from "react-native";
import { Button } from "react-native-elements";

import t from "tcomb-form-native";
const Form = t.form.Form;
import { RegisterStruct, RegisterOptions } from "../../forms/Register";

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
      }
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
      } else {
        console.log("Formulario inválido.");
      }
    } else {
      console.log("Contraseñas no son iguales.");
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
    const { registerStruct, registerOptions } = this.state;
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
        <Button title="Unirme" onPress={() => this.register()} />
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
  }
});