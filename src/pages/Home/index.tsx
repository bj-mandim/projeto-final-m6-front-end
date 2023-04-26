import { useContext } from "react";
import { Header } from "../../components/header";
import { Banner } from "../../components/banner";
import Filter from "../../components/filter";
import Card from "../../components/card/Home";
import { Footer } from "../../components/footer";
import { ContextApi } from "../../contexts";
import { HomeContainer } from "./styles";
import Pagination from "../../components/pagination";

function Home() {
  const { listCards }: any = useContext(ContextApi);
  console.log(listCards);

  return (
    <>
      <Header />

      <Banner />

      <HomeContainer>
        <Filter />
        <Card />
      </HomeContainer>

      <Pagination />

      <Footer />
    </>
  );
}

export default Home;

