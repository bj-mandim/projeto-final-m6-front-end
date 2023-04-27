import Card from "../../components/card/Home";
import { Footer } from "../../components/footer";
import { HeaderLogin } from "../../components/header";
import Pagination from "../../components/pagination";
import { ProfileUser } from "../../components/profile";
import { Article, Section } from "../Product/styles";
import { ContainerUser } from "./style";

function UserPage() {
  return (
    <>
      <HeaderLogin />
      <Section>
        <ContainerUser>
          <Article>
            <ProfileUser />
          </Article>

          <h3 className="heading-6">Anúncios</h3>
          <Card />

          <Pagination />
        </ContainerUser>
      </Section>
      <Footer />
    </>
  );
}

export default UserPage;

//fazer a parte do User
