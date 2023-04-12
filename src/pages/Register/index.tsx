import { Link } from "react-router-dom";
import Header from "../../components/header";
import { Form } from "../../components/form/style";
import { Footer } from "../../components/footer";

const Register = () => {



  return (
    <>
    <Header/>
  {/* <Section> */}
      <Form>
        <h2 className="header_register">Cadastro</h2>
        <br/>
        <strong>Informações pessoais</strong>

        <div className="content_register">
          <label htmlFor="email">Nome</label>
            <input
              type="name"
              id="name"
              placeholder="Ex. Samuel Leão"
            
            />

          <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              placeholder="Ex: samuel@kenzie.com.br"
            
            />

        <label htmlFor="email">CPF</label>
            <input
              type="text"
              id="CPF"
              placeholder="000.000.000-00"
            
            />

        <label htmlFor="email">Celular</label>
            <input
              type="text"
              id="phone"
              placeholder="(DDD)90000-0000"
            />

        <label htmlFor="email">Data de Nascimento</label>
            <input
              type="date"
              id="birth"
              placeholder="00/00/00"
            
            />

        <label htmlFor="email">Descrição</label>
            <input
              type="text"
              id="description"
              placeholder="Digitar descrição"
            
            />

          <p>
            <br/>
            <strong>Informações de Endereço</strong>
          </p>
        
        <label htmlFor="email">CEP</label>
            <input
              type="text"
              id="zip-code"
              placeholder="00000-000"
            
            />

        <label htmlFor="email">Estado</label>
            <input
              type="text"
              id="State"
              placeholder="Digitar Estado"
            
            />

        <label htmlFor="email">Cidade</label>
            <input
              type="text"
              id="State"
              placeholder="Digitar Cidade"
            
            />

        <label htmlFor="email">Rua</label>
            <input
              type="text"
              id="Street"
              placeholder="Digitar Rua"
            
            />

          <div className="inline-fields">
              <div>
                <label htmlFor="email">Número</label>
                    <input
                      type="text"
                      id="number"
                      placeholder="Digitar número"
                    
                    />
              </div>

            <div>
              <label htmlFor="email">Complemento</label>
                  <input
                    type="text"
                    id="complement"
                    placeholder="Ex. apart 307"
                  
                  />
            </div>
          </div>

          <p>
            <br/>
            <strong>Tipo de conta</strong>
          </p>

          <label htmlFor="password">Senha</label>
            <input
              type="password"
              id="password"
              placeholder="Digitar Senha"
            
            />

          <label htmlFor="password">Confirmar senha</label>
            <input
              type="password"
              id="password"
              placeholder="Confirmar Senha"
            
            />

            <br/><br/><br/>
            <Link to={"/login"} className="btn btn-primary"> Finalizar Cadastro</Link>

        </div>
      </Form>
      <Footer />
    {/* </Section> */}
    </>
  );
};

export default Register;
