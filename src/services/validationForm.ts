import * as Yup from "yup";

export const FormValidation = Yup.object().shape({
  CEP: Yup.string().min(9).required("Digite um cep válido"),
  Numero: Yup.string().min(1).required("minimo 1 caractere"),
  Rua: Yup.string().min(2).required("minimo de 2 caracteres"),
  Bairro: Yup.string().min(3).required("minimo de 3 caracteres"),
  Cidade: Yup.string().min(2).required("minimo de 2 caracteres"),
  UF: Yup.string().min(2).required("minimo de 2 caracteres"),
});
