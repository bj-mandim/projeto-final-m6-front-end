import { useContext } from "react";
import Card from "../../components/card/Home";
import { Footer } from "../../components/footer";
import { Header, HeaderLogin } from "../../components/header";
import { ProfileUser } from "../../components/profile";
import { UserContext } from "../../contexts/userContext";
import { Section, Article } from "../AdminPage/styles";
import { ContainerUser } from "./style";

function UserPage() {
  const { user, userPage } = useContext(UserContext);

  return (
    <>
      {user ? <HeaderLogin /> : <Header />}
      <Section>
          <Article style={{ marginBottom: 64 }}>
            <ProfileUser />
            <h3 className="heading-6">Anúncios</h3>
          

          {userPage && (
            <Card
              lista={userPage.cars.map((car) => {
                return { ...car, user: userPage };
              })}
            />
          )}
          </Article>
      </Section>
      <Footer />
    </>
  );
}

export default UserPage;
