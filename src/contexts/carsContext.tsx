import { createContext, useEffect, useState } from "react";
import { apiCards, apiKenzieCards } from "./api";

interface iChildren {
  children: React.ReactNode;
}

export const CarsContext = createContext({});

function ApiStateCars({ children }: iChildren) {
  const [model, setModel]: any = useState();
  const [brand, setBrand] = useState([]);
  const [list, setList]: any = useState([])
  const [color, setColor] = useState([])
  const [year, setYear] = useState([])

  async function getBrandsApi() {
    const data = await apiKenzieCards
      .get('cars')
      .then((res) => {
        setBrand(res.data)
      })
      .catch((err) => {
        console.log(err)
      })
    return data
  }

  async function getAllCars() {
    const data = await apiCards
      .get('cars')
      .then((res) => {
        return res.data
      })
      .catch((err) => {
        console.log(err)
      })
    return data
  }

  async function filterByBrand(brand: string) {
    const data = await getAllCars()
    const filtered = data.filter((item: any) => {
      return item.brand === brand
    })
    setList(filtered)
  }
  async function filterByModel(model: string) {
    const data = await getAllCars()
    const filtered = data.filter((item:any) => {
      return item.model === model
    })
    setList(filtered)
  }

  async function getAllModels() {
    const data = await getAllCars()
    const models = data.map((item: any) => {
      return item.model
    })
    setModel(models)
  }

  async function getAllColors() {
    const data = await getAllCars()
    const colors = data.map((item: any) => {
      return item.color
    })
    setColor(colors)
  }
  async function filterByColor(color: string) {
    const data = await getAllCars()
    const filtered = data.filter((item:any) => {
      return item.color === color
    })
    setList(filtered)
  }

  async function getAllYears() {
    const data = await getAllCars()
    const years = data.map((item: any) => {
      return item.year
    })
    setYear(years)
  }

  async function filterByYear(year: string) {
    const data = await getAllCars()
    const filtered = data.filter((item:any) => {
      return item.year === year
    })
    setList(filtered)
  }

  async function filterByFuel(fuel: string) {
    const data = await getAllCars()
    const filtered = data.filter((item: any) => {
      return item.fuel === fuel
    })
    setList(filtered)
  }

  async function filterByKm(kmMin: string, kmMax: string) {
    const data = await getAllCars()
    const filtered = data.filter((item: any) => {
      return item.km >= kmMin && item.km <= kmMax
    })
    setList(filtered)
  }
  async function filterByPrice(priceMin: string, priceMax: string) {
    const data = await getAllCars()
    const filtered = data.filter((item: any) => {
      return item.price >= Number(priceMin) && item.price <= Number(priceMax)
    })
    setList(filtered)
  }

  useEffect(() => {
    getBrandsApi()
    getAllModels()
    getAllColors()
    getAllYears()
  }, []);

  return (
    <CarsContext.Provider
      value={{
        getBrandsApi,
        brand,
        filterByBrand,
        list,
        setList,
        model,
        filterByModel,
        color,
        filterByColor,
        year,
        filterByYear,
        filterByFuel,
        filterByKm,
        filterByPrice,
      }}
    >{children}</CarsContext.Provider>
  )
}

export default ApiStateCars