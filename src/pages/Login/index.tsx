import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

import { Header } from "../../components/header";
import { Form } from "../../components/form/style";
import { Footer } from "../../components/footer";
import { UserContext } from "../../contexts/userContext";
import { schemaLogin } from "../../validators";
import { useContext } from "react";
import { iFormLogin } from "../../interfaces/User";

const Login = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<iFormLogin>({ resolver: yupResolver(schemaLogin) });

  const { loginUser } = useContext(UserContext);

  return (
    <>
      <Header />

      <Form onSubmit={handleSubmit(loginUser)}>
        <h2 className="header">Login</h2>

        <div className="content_login">
          <label htmlFor="email">Usuário</label>
          <input
            type="email"
            placeholder="Digitar usuário"
            {...register("email")}
          />

          <span className="error-message">{errors.email?.message}</span>

          <label htmlFor="password">Senha</label>
          <input
            type="password"
            placeholder="Digitar senha"
            {...register("password")}
          />

          <span className="error-message">{errors.password?.message}</span>

          <Link to={"/forgot-pass"} className="forgot-pass">
            Esqueci minha senha
          </Link>

          <button className="btn btn-primary w-100">Entrar</button>
          <p className="extra-text">Ainda não possui conta?</p>
          <Link to={"/register"} className="btn btn-outline-2">
            Cadastrar
          </Link>
        </div>
      </Form>

      <Footer />
    </>
  );
};

export default Login;
