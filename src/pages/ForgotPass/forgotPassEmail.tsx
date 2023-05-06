import { Link } from "react-router-dom";
import { Header } from "../../components/header";
import { Form } from "../../components/form/style";
import { Footer } from "../../components/footer";
import { yupResolver } from "@hookform/resolvers/yup";
import { schemaRecoveryPass } from "../../validators";
import { useForm } from "react-hook-form";
import { iRecoveyPass } from "../../interfaces/User";
import { useContext } from "react";
import { UserContext } from "../../contexts/userContext";

function ForgotPassEmail() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<iRecoveyPass>({ resolver: yupResolver(schemaRecoveryPass) });

  const { recoveryPassUser } = useContext(UserContext)

  return (
      <>
      <Header></Header>
      <Form onSubmit={handleSubmit(recoveryPassUser)}>
          <h2 className="header">Esqueceu sua senha?</h2>
  
          <div className="content_login">
              <label htmlFor="email">Digite seu email.</label>
              <input type="email" id="email" placeholder="exemplo@email.com"  {...register("email")}/>
              <button type="submit" className="btn btn-primary w-100" style={{marginTop: 32}}>Enviar</button>
          </div>
          <br/>
          <Link to={"/login"} className="extra-text">{'<-'} Voltar à página de login</Link>
      </Form>
      <Footer />
    </>
  )
}

export default ForgotPassEmail