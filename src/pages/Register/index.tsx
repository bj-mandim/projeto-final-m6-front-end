import { Header } from "../../components/header";
import { Form } from "../../components/form/style";
import { Footer } from "../../components/footer";
import { yupResolver } from "@hookform/resolvers/yup";
import { UserContext } from "../../contexts/userContext";
import { iFormSignup } from "../../interfaces/User";
import { useContext, useState } from "react";
import { Article } from "../../components/form/style";
import { useForm } from "react-hook-form";
import { schemaRegister } from "../../validators";

const Register = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<iFormSignup>({
    resolver: yupResolver(schemaRegister),
  });

  const [validatedIsAnnouncer, setValidatedIsAnnouncer] =
    useState<boolean>(false);
  const [advertiserAnnouncer, setAdvertiserAnnouncer] = useState<
    string | boolean
  >("");
  const { registerUser } = useContext(UserContext);

  function validatedAccountType(data: iFormSignup) {
    if (advertiserAnnouncer && advertiserAnnouncer !== "") {
      data.is_announcer = true;
      setAdvertiserAnnouncer(false);
      registerUser(data);
    } else if (!advertiserAnnouncer && advertiserAnnouncer !== "") {
      data.is_announcer = false;
      setAdvertiserAnnouncer(false);
      registerUser(data);
    } else if (data.is_announcer === undefined) {
      setValidatedIsAnnouncer(true);
    }
  }

  return (
    <>
      <Header />
      <Form onSubmit={handleSubmit(validatedAccountType)}>
        <h2 className="header_register">Cadastro</h2>
        <br />
        <strong>Informações pessoais</strong>

        <div className="content_register">
          <label htmlFor="name">Nome</label>
          <input placeholder="Ex. Samuel Leão" {...register("name")} />
          <span className="error-message">{errors.name?.message}</span>

          <label htmlFor="email">Email</label>
          <input
            type="email"
            placeholder="Ex: samuel@kenzie.com.br"
            {...register("email")}
          />
          <span className="error-message">{errors.email?.message}</span>

          <label htmlFor="CPF">CPF</label>
          <input
            type="text"
            placeholder="000.000.000-00"
            {...register("cpf")}
          />
          <span className="error-message">{errors.cpf?.message}</span>

          <label htmlFor="phone">Celular</label>
          <input
            type="text"
            placeholder="(DDD)90000-0000"
            {...register("phone")}
          />
          <span className="error-message">{errors.phone?.message}</span>

          <label htmlFor="birth">Data de Nascimento</label>
          <input type="test" placeholder="00/00/00" {...register("birth")} />

          <label htmlFor="description">Descrição</label>
          <input
            type="text"
            placeholder="Digitar descrição"
            {...register("description")}
          />
          <span className="error-message">{errors.description?.message}</span>

          <p>
            <br />
            <strong>Informações de Endereço</strong>
          </p>

          <label htmlFor="cep">CEP</label>
          <input
            type="text"
            placeholder="00000-000"
            {...register("address.cep")}
          />
          <span className="error-message">{errors.address?.cep?.message}</span>

          <label htmlFor="state">Estado</label>
          <input
            type="text"
            placeholder="Digitar Estado"
            {...register("address.state")}
          />
          <span className="error-message">{errors.address?.state?.message}</span>

          <label htmlFor="city">Cidade</label>
          <input
            type="text"
            placeholder="Digitar Cidade"
            {...register("address.city")}
          />
          <span className="error-message">{errors.address?.city?.message}</span>

          <label htmlFor="street">Rua</label>
          <input
            type="text"
            placeholder="Digitar Rua"
            {...register("address.street")}
          />
          <span className="error-message">{errors.address?.street?.message}</span>

          <div className="inline-fields">
            <div>
              <label htmlFor="number">Número</label>
              <input
                type="text"
                placeholder="Digitar número"
                {...register("address.number")}
              />
              <span className="error-message">{errors.address?.number?.message}</span>
            </div>

            <div>
              <label htmlFor="complement">Complemento</label>
              <input
                type="text"
                placeholder="Ex. apart 307"
                {...register("address.complement")}
              />
              <span className="error-message">{errors.address?.complement?.message}</span>
            </div>
          </div>

          <p>
            <br />

            <strong>Tipo de conta</strong>
          </p>
          <Article>
            <button
              onClick={() => setAdvertiserAnnouncer(false)}
              type="button"
              className="white_btn"
            >
              Comprador
            </button>
            <button
              onClick={() => setAdvertiserAnnouncer(true)}
              type="button"
              className="white_btn"
            >
              Anunciante
            </button>
          </Article>
          {validatedIsAnnouncer && (
            <p>Escolher o tipo de conta é obrigatório</p>
          )}

          <label htmlFor="password">Senha</label>
          <input
            type="password"
            placeholder="Digitar Senha"
            {...register("password")}
          />
          <span className="error-message">{errors.password?.message}</span>

          <label htmlFor="confirmPassword">Confirmar senha</label>
          <input
            type="password"
            placeholder="Confirmar Senha"
            {...register("confirmPassword")}
          />
          <span className="error-message">{errors.confirmPassword?.message}</span>

          <br />
          <br />
          <br />
          <button className="btn btn-primary w-100">Cadastrar</button>
        </div>
      </Form>
      <Footer />
    </>
  );
};

export default Register;
