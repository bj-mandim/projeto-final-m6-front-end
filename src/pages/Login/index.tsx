import { Link } from "react-router-dom";
import Header from "../../components/header";
import { Form } from "../../components/form/style";
import { Footer } from "../../components/footer";

const Login = () => {

  return (
    <>
    <Header></Header>
  {/* <Section>*/}
      <Form> 
        <h2 className="header">Login</h2>

        <div className="content_login">
          <label htmlFor="email">Usuário</label>
            <input
              type="email"
              id="email"
              placeholder="Digitar usuário"
            
            />

          <label htmlFor="password">Senha</label>
            <input
              type="password"
              id="password"
              placeholder="Digitar senha"
            
            />

            <Link to={"/login"} className="forgot-pass">Esqueci minha senha</Link>

            <button type="submit" className="btn btn-primary w-100">Entrar</button>
            <p className="extra-text">Ainda não possui conta?</p>
            <Link to={"/register"} className="btn btn-outline-2">Cadastrar</Link>
        </div>
       </Form>
    {/*</Section> */}
    <Footer />
    </>
  );
};

export default Login;
