import React from "react";

import t from "tcomb-form-native";
import formValidation from "../utils/Validation";

export const RegisterStruct = t.struct({
  name: t.String,
  email: formValidation.email,
  password: formValidation.password,
  passwordConfirmation: formValidation.password
});

export const RegisterOptions = {
  fields: {
    name: {
      label: "Nombre (*):",
      placeholder: "Escribe tu nombre y apellido",
      error: "Nombre inválido"
    },
    email: {
      label: "Email (*):",
      placeholder: "Escribe tu email",
      error: "Email inválido"
    },
    password: {
      label: "Contraseña (*):",
      placeholder: "Escribe tu contraseña",
      error: "Contraseña inválido",
      password: true,
      secureTextEntry: true
    },
    passwordConfirmation: {
      label: "Repetir contraseña:",
      placeholder: "Escribe tu contraseña",
      error: "Contraseña inválido",
      password: true,
      secureTextEntry: true
    }
  }
};
