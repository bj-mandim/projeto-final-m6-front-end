import { useContext } from "react";
import Card from "../../components/card/Home";
import { Footer } from "../../components/footer";
import { Header, HeaderLogin } from "../../components/header";
import Pagination from "../../components/pagination";
import { ProfileUser } from "../../components/profile";
import { UserContext } from "../../contexts/userContext";
import { Article, Section } from "../Product/styles";
import { ContainerUser } from "./style";

function UserPage() {
  const { user, userPage } = useContext(UserContext);

  return (
    <>
      {user ? <HeaderLogin /> : <Header />}
      <Section>
        <ContainerUser>
          <Article>
            <ProfileUser />
          </Article>

          <h3 className="heading-6">Anúncios</h3>
          {userPage && (
            <Card
              lista={userPage.cars.map((car) => {
                return { ...car, user: userPage };
              })}
            />
          )}

          <Pagination />
        </ContainerUser>
      </Section>
      <Footer />
    </>
  );
}

export default UserPage;
