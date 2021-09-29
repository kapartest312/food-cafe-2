import * as yup from "yup";

export let loginFormSchema = yup.object().shape({
  email: yup.string().required("Введите логин"),
  password: yup.string().required("Введите пароль"),
});

export const loginFormFieldsNames = {
  email: "email",
  password: "password",
};

export const loginFormInitialValues = {
  email: "",
  password: "",
};
