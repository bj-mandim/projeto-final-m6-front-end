import { useContext } from "react";
import Card, { CardUserPage } from "../../components/card/Home";
import { Footer } from "../../components/footer";
import { Header, HeaderLogin } from "../../components/header";
import Pagination from "../../components/pagination";
import { ProfileUser } from "../../components/profile";
import { UserContext } from "../../contexts/userContext";
import { Article, Section } from "../Product/styles";
import { ContainerUser } from "./style";

function UserPage() {
  const { user }: any = useContext(UserContext);

  return user ? (
    <>
      <HeaderLogin />
      <Section>
        <ContainerUser>
          <Article>
            <ProfileUser />
          </Article>

          <h3 className="heading-6">Anúncios</h3>
          <CardUserPage />

          <Pagination />
        </ContainerUser>
      </Section>
      <Footer />
    </>
  ) : (
    <>
      <Header />
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
