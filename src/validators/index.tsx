import * as yup from "yup";

const cep = /^[0-9]{5}[0-9]{3}$/;

export const schemaLogin = yup.object({
  email: yup.string().required("E-mail obrigatório"),
  password: yup.string().required("Senha obrigatória"),
});

export const schemaRecoveryPass = yup.object({
  email: yup.string().required("E-mail obrigatório"),
});

export const schemaNewPass = yup.object({
  password: yup
    .string()
    .required("Senha obrigatória!")
    .matches(/[A-Z]/, "A senha deve conter pelo menos 1 letra maiúscula")
    .matches(/[a-z]/, "A senha deve conter pelo menos 1 letra minuscula")
    .matches(/(\d)/, "A senha deve conter pelo menos um número")
    .matches(/.{8,}/, "A senha deve conter no mínimo 8 digitos"),
  confirmPassword: yup
    .string()
    .oneOf([yup.ref("password")], "As senhas devem ser idênticas"),
});

export const schemaRegister = yup.object({
  name: yup.string().required("Nome obrigatório"),
  email: yup
    .string()
    .required("E-mail obrigatório")
    .email("Preencha o email corretamente, por favor!"),
  cpf: yup.string().required("Cpf obrigatório"),
  birth: yup.string().required("Data de nascimento obrigatória"),
  description: yup.string().required("Descrição obrigatória"),
  phone: yup
    .string()
    .required("Número de telefone é obrigatório")
    .length(15, "Numero de telefone deve ter 15 caracteres"),
  password: yup
    .string()
    .required("Senha obrigatória!")
    .matches(/[A-Z]/, "A senha deve conter pelo menos 1 letra maiúscula")
    .matches(/[a-z]/, "A senha deve conter pelo menos 1 letra minuscula")
    .matches(/(\d)/, "A senha deve conter pelo menos um número")
    .matches(/.{8,}/, "A senha deve conter no mínimo 8 digitos"),
  confirmPassword: yup
    .string()
    .oneOf([yup.ref("password")], "As senhas devem ser idênticas"),
  address: yup.object({
    cep: yup
      .string()
      .required("CEP obrigatório")
      .matches(cep, "Por favor, digite um CEP válido."),
    state: yup.string().required("Estado obrigatório"),
    city: yup.string().required("Cidade obrigatória"),
    street: yup.string().required("Rua obrigatória"),
    number: yup.string().required("Numero obrigatório"),
    complement: yup.string().notRequired(),
  }),
});

export const schemaCreateAnnouncement = yup.object({
  brand: yup.string().required("Marca obrigatória"),
  model: yup.string().required("Modelo obrigatório"),
  year: yup.number().required("Ano obrigatório"),
  is_active: yup.boolean().notRequired(),
  fuel: yup.string().required("Combustível obrigatório"),
  km: yup.number().required("Quilometragem obrigatória"),
  color: yup.string().required("Cor obrigatória"),
  fipe_table: yup.string().notRequired(),
  price: yup.string().required("Preço obrigatório"),
  description: yup.string().required("Descrição obrigatória"),
  images: yup.array(),
});

export const schemaComment = yup.object({
  comment: yup.string().required("É preciso ter algo para comentar"),
});

export const schemaPatchUser = yup.object({
  name: yup.string(),
  email: yup.string().email("Preencha o email corretamente, por favor!"),
  cpf: yup.string(),
  birth: yup.string(),
  description: yup.string(),
  phone: yup.string(),
});

export const schemaPatchAddress = yup.object({
  address: yup.object({
    cep: yup.string().matches(cep, "Por favor, digite um CEP válido."),
    state: yup.string(),
    city: yup.string(),
    street: yup.string(),
    number: yup.string(),
    complement: yup.string(),
  }),
});
