import { createContext, useContext, useEffect, useState } from "react";
import { apiCards, apiKenzieCards } from "./api";
import {
  IComment,
  iFormCreateAnnouncement,
  iFormUpdateAnnouncement,
} from "../interfaces/Car";
import { toast } from "react-toastify";
import { iChildren } from "../interfaces/Others";
import { ContextApi } from ".";
import { UserContext } from "./userContext";

export const CarsContext = createContext({} as any);

function ApiStateCars({ children }: iChildren) {
  const [model, setModel]: any = useState();
  const [brand, setBrand] = useState([]);
  const [list, setList]: any = useState([]);
  const [color, setColor] = useState([]);
  const [year, setYear] = useState([]);
  const { attComments } = useContext(ContextApi);
  const { getProfile } = useContext(UserContext);

  async function getBrandsApi() {
    const data = await apiKenzieCards
      .get("cars")
      .then((res) => {
        setBrand(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
    return data;
  }

  async function getAllCars() {
    const data = await apiCards
      .get("cars")
      .then((res) => {
        return res.data;
      })
      .catch((err) => {
        console.log(err);
      });
    return data;
  }

  async function createAnnouncement(
    dataUser: iFormCreateAnnouncement
  ): Promise<void> {
    const token = localStorage.getItem("@Token_cars_shop");
    if (token) {
      try {
        await apiCards.post<iFormCreateAnnouncement>(`cars`, dataUser, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        toast.success("Anúncio criado!");
      } catch (error) {
        localStorage.removeItem("@Token_cars_shop");
        console.log(error);
        toast.error("Algo deu errado, confira as informações!");
      } finally {
        getProfile();
      }
    }
  }

  async function updateAnnouncement(info: any, id: string): Promise<void> {
    for (let x in info) {
      if (!info[x]) {
        delete info[x];
      }
      if (x === "images") {
        delete info.images;
      }
    }

    if (Object.keys(info).length > 0) {
      const token = localStorage.getItem("@Token_cars_shop");
      if (token) {
        try {
          await apiCards.patch<iFormUpdateAnnouncement>(`cars/${id}`, info, {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          });
          toast.success("Anúncio editado com sucesso!");
        } catch (error) {
          localStorage.removeItem("@Token_cars_shop");
          console.log(error);
          toast.error("Algo deu errado, confira as informações!");
        } finally {
          getProfile();
        }
      }
    }
  }

  async function deleteAnnouncement(id: string): Promise<void> {
    const token = localStorage.getItem("@Token_cars_shop");

    if (token) {
      try {
        await apiCards.delete<iFormUpdateAnnouncement>(`cars/${id}`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        toast.success("Anúncio deletado com sucesso!");
      } catch (error) {
        localStorage.removeItem("@Token_cars_shop");
        console.log(error);
        toast.error("Algo deu errado!");
      } finally {
        getProfile();
      }
    }
  }

  async function filterByBrand(brand: string) {
    const data = await getAllCars();
    const filtered = data.filter((item: any) => {
      return item.brand === brand;
    });
    setList(filtered);
  }

  async function filterByModel(model: string) {
    const data = await getAllCars();
    const filtered = data.filter((item: any) => {
      return item.model === model;
    });
    setList(filtered);
  }

  async function getAllModels() {
    const data = await getAllCars();
    const models = data.map((item: any) => {
      return item.model;
    });
    setModel(models);
  }

  async function getAllColors() {
    const data = await getAllCars();
    const colors = data.map((item: any) => {
      return item.color;
    });
    setColor(colors);
  }
  async function filterByColor(color: string) {
    const data = await getAllCars();
    const filtered = data.filter((item: any) => {
      return item.color === color;
    });
    setList(filtered);
  }

  async function getAllYears() {
    const data = await getAllCars();
    const years = data.map((item: any) => {
      return item.year;
    });
    setYear(years);
  }

  async function filterByYear(year: string) {
    const data = await getAllCars();
    const filtered = data.filter((item: any) => {
      return item.year === year;
    });
    setList(filtered);
  }

  async function filterByFuel(fuel: string) {
    const data = await getAllCars();
    const filtered = data.filter((item: any) => {
      return item.fuel === fuel;
    });
    setList(filtered);
  }

  async function filterByKm(kmMin: string, kmMax: string) {
    const data = await getAllCars();
    const filtered = data.filter((item: any) => {
      return item.km >= kmMin && item.km <= kmMax;
    });
    setList(filtered);
  }
  async function filterByPrice(priceMin: string, priceMax: string) {
    const data = await getAllCars();
    const filtered = data.filter((item: any) => {
      return item.price >= Number(priceMin) && item.price <= Number(priceMax);
    });
    setList(filtered);
  }

  async function createComment(comment: IComment, id: string): Promise<void> {
    try {
      apiKenzieCards.post(`/cars/${id}/comments`, comment);
      toast.success("Comentário criado com Sucesso!");
    } catch (error) {
      console.log(error);
      toast.error("Erro ao criar o comentário!");
    }
  }

  async function updateComment(
    id: string,
    data: { message: string }
  ): Promise<void> {
    const token = localStorage.getItem("@Token_cars_shop");
    try {
      await apiCards.patch(`cars/comments/${id}`, data, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      attComments();
      toast.success("Comentário editado com Sucesso!");
    } catch (error) {
      console.log(error);
      attComments();
      toast.error("Erro ao editar o comentário!");
    }
  }

  async function deleteComment(id: string): Promise<void> {
    const token = localStorage.getItem("@Token_cars_shop");
    try {
      await apiCards.delete(`cars/comments/${id}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      attComments();
      toast.success("Comentário deletado com Sucesso!");
    } catch (error) {
      console.log(error);
      attComments();
      toast.error("Erro ao deletar o comentário!");
    }
  }

  useEffect(() => {
    getBrandsApi();
    getAllModels();
    getAllColors();
    getAllYears();
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
        createComment,
        updateComment,
        deleteComment,
        createAnnouncement,
        updateAnnouncement,
        deleteAnnouncement,
      }}
    >
      {children}
    </CarsContext.Provider>
  );
}

export default ApiStateCars;
