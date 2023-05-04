import { useContext, useEffect, useState } from "react";
import { Header, HeaderLogin } from "../../components/header";
import { Banner } from "../../components/banner";
import Filter from "../../components/filter";
import Card from "../../components/card/Home";
import { Footer } from "../../components/footer";
import { ContextApi } from "../../contexts";
import { HomeContainer } from "./styles";
import Pagination from "../../components/pagination";
import { ICarsReturn } from "../../interfaces/Car";
import { UserContext } from "../../contexts/userContext";
import { CarsContext } from "../../contexts/carsContext";

function Home() {
  const { listCards }: any = useContext(ContextApi);
  const { user }: any = useContext(UserContext);
  const listaFeita = listCards;
  const { list }: any = useContext(CarsContext);

  const [cars, setCars] = useState<ICarsReturn[]>([]);
  const [query, setQuery] = useState("");
  const [brands, setBrands] = useState<string[]>([]);

  async function getCars(): Promise<void> {
    try {
      const allCars = await listCards.get(`/cars ${query}`);
      setCars(allCars.data.result);

      const newBrands = allCars.data.result.map(
        (car: ICarsReturn) => car.brand
      );
      setBrands([...new Set([...newBrands])]);
    } catch (error) {
      console.error(error);
    }
  }

  useEffect(() => {
    getCars();
  }, [query]);

  return user ? (
    <>
      <HeaderLogin />

      <Banner />

      <HomeContainer>
        <Filter
          brands={brands}
          models={[]}
          colors={[]}
          years={[]}
          fuels={[]}
          handleSetQuery={function (type: string, value: string): void {
            throw new Error("Function not implemented.");
          }}
        />
        {list.length > 0 ? <Card lista={list} /> : <Card lista={listaFeita} />}
      </HomeContainer>

      <Pagination />

      <Footer />
    </>
  ) : (
    <>
      <Header />

      <Banner />

      <HomeContainer>
        <Filter
          brands={brands}
          models={[]}
          colors={[]}
          years={[]}
          fuels={[]}
          handleSetQuery={function (type: string, value: string): void {
            throw new Error("Function not implemented.");
          }}
        />
        {list.length > 0 ? <Card lista={list} /> : <Card lista={listaFeita} />}
      </HomeContainer>

      <Pagination />

      <Footer />
    </>
  );
}

export default Home;
