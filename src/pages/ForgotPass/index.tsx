import { Link } from "react-router-dom";
import Header from "../../components/header";
import { Form } from "../../components/form/style";
import { Footer } from "../../components/footer";

function ForgotPassword() {
    return (
        <>
        <Header></Header>
        <Form>
            <h2 className="header">Esqueceu sua senha?</h2>
            <p className="body-2">Informe seu e-mail para receber um link de redefinação de senha</p>
    
            <div className="content_login">
                <label htmlFor="email">Informe seu e-mail</label>
                <input type="email" id="email" placeholder="Digitar usuário" />
                <button type="submit" className="btn btn-primary w-100" style={{marginTop: 32}}>Enviar</button>
            </div>
            
            <p className="btn btn-medium btn-success" style={{lineHeight: 1}}>E-mail de recuperação de senha enviado com sucesso!</p>
            
            <br/>
            <Link to={"/login"} className="extra-text">{'<-'} Voltar a página de login</Link>
        </Form>
        <Footer />
      </>
      );
}

export default ForgotPassword;
