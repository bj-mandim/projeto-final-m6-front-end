import { useContext, useEffect, useState } from "react";
import { Header, HeaderLogin } from "../../components/header";
import { Banner } from "../../components/banner";
import Filter from "../../components/filter";
import Card from "../../components/card/Home";
import { Footer } from "../../components/footer";
import { ContextApi } from "../../contexts";
import { HomeContainer } from "./styles";
import { ICarsReturn, IModel } from "../../interfaces/Car";
import { UserContext } from "../../contexts/userContext";
import { CarsContext } from "../../contexts/carsContext";
import { CardsList } from "../../components/card/Home/style";

function Home() {
  const { listCards }: any = useContext(ContextApi);
  const { user }: any = useContext(UserContext);
  const listaFeita = listCards;
  const { list }: any = useContext(CarsContext);

  const [cars, setCars] = useState<ICarsReturn[]>([]);
  const [query, setQuery] = useState("");
  const [brands, setBrands] = useState<string[]>([]);
  const [compareModels, setCompareModels] = useState<IModel[]>([]);

  function getBrands(): void {
    const newBrands = listCards.map((car: ICarsReturn) => car.brand);
    setBrands(newBrands);
  }

  useEffect(() => {
    getBrands();
  }, [listCards]);

  function getGoodPrice(car: ICarsReturn) {
    const findModel = compareModels.find(
      (apiModel) =>
        apiModel.name.toLowerCase() == car.model.toLowerCase() &&
        apiModel.year == car.year
    );
    if (findModel) {
      return car.price <= findModel.price * 0.95;
    }
    return false;
  }

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

      <Footer />
    </>
  ) : (
    <>
      <Header />

      <Banner />

      <HomeContainer>
        <CardsList>
          {listCards.map((anuncio: any) => {
            const goodPrice = getGoodPrice(anuncio);
            return (
              <Card
                car={anuncio}
                key={anuncio.id}
                good_price={goodPrice}
                lista={[]}
              />
            );
          })}
        </CardsList>

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

      <Footer />
    </>
  );
}

export default Home;
