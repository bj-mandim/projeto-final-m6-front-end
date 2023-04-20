import Header from "../../components/header";
import { Footer } from "../../components/footer";
import MainPages from "../../components/MainPages/style";
import Avatar from "../../components/avatar";
import Button from "../../components/button/style";
import CardUserAdmin from "../../components/card/UserAdminPage";

function AdminPage() {
  return (
    <>
      <Header></Header>
      <MainPages>
        <div className="background-color"></div>
        <section className="container-data">
          <div className="generalContainer">
            <div className="dataAdmin">
              <img
                src="https://www.psicologo.com.br/wp-content/uploads/sou-uma-pessoa-boa-ou-nao.jpg"
                alt="img_admin"
              />

              <div>
                <h3 className="heading-7">Samuel Leão</h3>
                <span className="heading-8">Anunciante</span>
              </div>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Repellat quaerat repellendus, corporis iure quibusdam commodi
                odit excepturi aspernatur quas? Iusto magnam id vitae explicabo
                reiciendis odit, dolores exercitationem error animi!
              </p>
              <Button model="model-8">Criar Anuncio</Button>
            </div>

            <div className="list-cards-Admin">
              <CardUserAdmin></CardUserAdmin>
            </div>
          </div>
        </section>
      </MainPages>
      <Footer></Footer>
    </>
  );
}

export default AdminPage;
