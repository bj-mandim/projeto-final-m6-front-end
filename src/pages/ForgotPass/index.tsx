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
    
            <div className="content_login">
                <label htmlFor="email">Informe sua nova senha.</label>
                <input type="email" id="email" placeholder="Digitar senha" />
                <label htmlFor="email">Confirme sua nova senha.</label>
                <input type="email" id="email" placeholder="Digitar senha" />
                <button type="submit" className="btn btn-primary w-100" style={{marginTop: 32}}>Salvar</button>
            </div>
            
            <p className="btn btn-medium btn-success" style={{lineHeight: 1}}>Senha redefinida com sucesso!</p>
            
            <br/>
            <Link to={"/login"} className="extra-text">{'<-'} Voltar à página de login</Link>
        </Form>
        <Footer />
      </>
      );
}

export default ForgotPassword;
