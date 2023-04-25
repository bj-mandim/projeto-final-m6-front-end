import Header from "../../components/header";
import { Section, Article } from "./styles";
import Profile from "../../components/profile";
import CardUserAdmin from "../../components/card/UserAdminPage";
import Pagination from "../../components/pagination";
import { Footer } from "../../components/footer";

function AdminPage() {
  return (
    <>
      <Header />
      <Section>
        <Article>
          <Profile/>
          <h3 className="heading-6">Anúncios</h3>
        </Article>
        
        <CardUserAdmin/>

        <Pagination/>
      </Section>
      <Footer />
    </>
  );
}

export default AdminPage;
