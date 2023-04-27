import { useContext, useEffect, useState } from "react";
import { Header } from "../../components/header";
import { Banner } from "../../components/banner";
import Filter from "../../components/filter";
import Card from "../../components/card/Home";
import { Footer } from "../../components/footer";
import { ContextApi } from "../../contexts";
import { HomeContainer } from "./styles";
import Pagination from "../../components/pagination";
import { ICarsReturn } from "../../interfaces/Car/car.interface";

function Home() {
  const { listCards }: any = useContext(ContextApi);
  console.log(listCards);

  const [cars, setCars] = useState<ICarsReturn[]>([]);
	const [query, setQuery] = useState("");
  const [brands, setBrands] = useState<string[]>([])



  async function getCars(): Promise<void> {
		try {
			const allCars = await listCards.get(`/cars ${query}`);
			setCars(allCars.data.result);

			const newBrands = allCars.data.result.map((car: ICarsReturn) => car.brand);
			setBrands([...new Set([...newBrands])]);
		} catch (error) {
			console.error(error);
		}
	}

  useEffect(() => {
		getCars();
	// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [query]);
  
  return (
    <>
      <Header />

      <Banner />

      <HomeContainer>
        <Filter 
				  brands={brands} models={[]} colors={[]} years={[]} fuels={[]} handleSetQuery={function (type: string, value: string): void {
					  throw new Error("Function not implemented.");
				  } }        />
        <Card />
      </HomeContainer>

      <Pagination />

      <Footer />
    </>
  );
}

export default Home;

