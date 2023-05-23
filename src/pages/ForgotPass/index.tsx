import { Link, useParams } from "react-router-dom";
import { Header } from "../../components/header";
import { Form } from "../../components/form/style";
import { Footer } from "../../components/footer";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { schemaNewPass } from "../../validators";
import { iChangePass } from "../../interfaces/User";
import { useContext } from "react";
import { UserContext } from "../../contexts/userContext";

function ForgotPassword() {
  const { resetToken } = useParams();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<iChangePass>({ resolver: yupResolver(schemaNewPass) });

  const { changePassUser, setToken } = useContext(UserContext);
  setToken(resetToken);
  return (
    <>
      <Header></Header>
      <Form onSubmit={handleSubmit(changePassUser)}>
        <h2 className="header">Esqueceu sua senha?</h2>

        <div className="content_login">
          <label htmlFor="email">Informe sua nova senha.</label>
          <input
            type="password"
            id="newPassword"
            placeholder="Digite a senha"
            {...register("password")}
          />
          <span>{errors.password?.message}</span>
          <label htmlFor="email">Confirme sua nova senha.</label>
          <input
            type="password"
            id="confirmPassword"
            placeholder="Confirme a senha"
            {...register("confirmPassword")}
          />
          <span>{errors.confirmPassword?.message}</span>
          <button
            type="submit"
            className="btn btn-primary w-100"
            style={{ marginTop: 32 }}
          >
            Salvar
          </button>
        </div>
        <br />
        <Link to={"/login"} className="extra-text">
          {"<-"} Voltar à página de login
        </Link>
      </Form>
      <Footer />
    </>
  );
}

export default ForgotPassword;
