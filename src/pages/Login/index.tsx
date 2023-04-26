import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

import Header from "../../components/header";
import { Form } from "../../components/form/style";
import { Footer } from "../../components/footer";
import { UserContext, iFormLogin } from "../../contexts/userContext";
import { schemaLogin } from "../../validators";
import { useContext } from "react";

const Login = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<iFormLogin>({ resolver: yupResolver(schemaLogin) });

  const {loginUser} = useContext(UserContext)


  return (
    <>
      <Header></Header>
      {/*       <Section> */}
      <Form onSubmit={handleSubmit(loginUser)}>
        <h2 className="header">Login</h2>

        <div className="content_login">
          <label htmlFor="email">Usuário</label>
          <input type="email" placeholder="Digitar usuário" {...register("email")} />

          <label htmlFor="password">Senha</label>
          <input type="password" placeholder="Digitar senha" {...register("password")} />

          <Link to={"/login"} className="forgot-pass">
            Esqueci minha senha
          </Link>

          <button className="btn btn-primary w-100">
            Entrar
          </button>
          <p className="extra-text">Ainda não possui conta?</p>
          <Link to={"/register"} className="btn btn-outline-2">
            Cadastrar
          </Link>
        </div>
      </Form>
      {/*       </Section> */}
      <Footer />
    </>
  );
};

export default Login;
