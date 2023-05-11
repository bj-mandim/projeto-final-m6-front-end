import { useContext, useState } from "react";
import { CloseIcon } from "@chakra-ui/icons";
import {
  FilterContainer,
  FilterGroupWrapper,
  FilterGroup,
  FilterList,
  InputGroup,
} from "./style";
import { IHomeFilter } from "../../interfaces/Filter/filter.interface";
import { ContextApi } from "../../contexts";
import { CarsContext } from "../../contexts/carsContext";

const Filter = ({
  brands,
  models,
  colors,
  years,
  fuels,
  handleSetQuery,
}: IHomeFilter) => {
  const [openFilter, setOpenFilter] = useState("close");
  const { getCarsBrand }: any = useContext(ContextApi);
  const [formValues, setFormValues] = useState({
    kmMin: "",
    kmMax: "",
    priceMin: "",
    priceMax: "",
  });
  const handleInputChange = (event: any) => {
    const { name, value } = event.target;
    setFormValues({ ...formValues, [name]: value });
  };
  const {
    brand,
    filterByBrand,
    setList,
    model,
    filterByModel,
    color,
    filterByColor,
    year,
    filterByYear,
    fuel,
    filterByFuel,
    filterByKm,
    filterByPrice,
  }: any = useContext(CarsContext);

  let modelsReduced = [];
  if (model) {
    modelsReduced = model.filter(
      (item: any, i: any) => model.indexOf(item) === i
    );
  }
  let colorsReduced = [];
  if (color) {
    colorsReduced = color.filter(
      (item: any, i: any) => color.indexOf(item) === i
    );
  }
  let yearsReduced = [];
  if (year) {
    yearsReduced = year.filter((item: any, i: any) => year.indexOf(item) === i);
    yearsReduced.sort();
  }
  let fuelReduced = [];
  if (fuel) {
    fuelReduced = fuel.filter((item: any, i: any) => fuel.indexOf(item) === i);
  }

  return (
    <>
      <FilterContainer>
        <button
          className="btn btn-primary w-100"
          id="openFilter"
          onClick={() => setOpenFilter("show")}
        >
          Filtros
        </button>

        <FilterGroupWrapper className="filter" id={openFilter}>
          <header className="filter-header-mob">
            <h4 className="heading-7">Filtro</h4>
            <CloseIcon onClick={() => setOpenFilter("close")} />
          </header>

          <FilterGroup id="marca">
            <h3 className="heading-4">Marca</h3>
              <FilterList
                  className="heading-6"
                >
              {Object.keys(brand).map((keys) => (
                <li id={keys} onClick={() => filterByBrand(keys)}>
                  {keys}
                </li>
              ))}
              </FilterList>
              <FilterList
                className="heading-6"
                onClick={() => getCarsBrand()}
              ></FilterList>
          </FilterGroup>
          <FilterGroup id="modelo">
            <h3 className="heading-4">Modelo</h3>
            <FilterList className="heading-6">
              {modelsReduced.map((item: string[]) => {
                return (
                  <li id={item.toString()} onClick={() => filterByModel(item)}>
                    {item}
                  </li>
                );
              })}
            </FilterList>
          </FilterGroup>
          <FilterGroup id="cor">
            <h3 className="heading-4">Cor</h3>
            <FilterList className="heading-6">
              {colorsReduced.map((item: string) => {
                return (
                  <li id={item} onClick={() => filterByColor(item)}>
                    {item}
                  </li>
                );
              })}
            </FilterList>
          </FilterGroup>
          <FilterGroup id="ano">
            <h3 className="heading-4">Ano</h3>
            <FilterList className="heading-6">
              {yearsReduced.map((item: string) => {
                return (
                  <li id={item} onClick={() => filterByYear(item)}>
                    {item}
                  </li>
                );
              })}
            </FilterList>
          </FilterGroup>
          <FilterGroup id="combustivel">
            <h3 className="heading-4">Combustível</h3>
            <FilterList className="heading-6">
              {fuelReduced.map((item: string) => {
                return (
                  <li onClick={() => filterByFuel(item)}>{item}</li>
                )
              })}
              {/* <li id="1" onClick={() => filterByFuel("1")}>
                Flex
              </li>
              <li id="2" onClick={() => filterByFuel("2")}>
                Hibrido
              </li>
              <li id="3" onClick={() => filterByFuel("3")}>
                Elétrico
              </li> */}
            </FilterList>
          </FilterGroup>
          <FilterGroup id="km">
            <h3 className="heading-4">Km</h3>
            <InputGroup>
              <input
                type="text"
                name="kmMin"
                value={formValues.kmMin}
                placeholder="Mínima"
                onChange={(event) => {
                  handleInputChange(event);
                }}
              />
              <input
                type="text"
                name="kmMax"
                value={formValues.kmMax}
                placeholder="Máxima"
                onChange={(event) => {
                  handleInputChange(event);
                  filterByKm(formValues.kmMin, event.target.value);
                }}
              />
            </InputGroup>
          </FilterGroup>
          <FilterGroup id="preco">
            <h3 className="heading-4">Preço</h3>
            <InputGroup>
              <input
                type="text"
                name="priceMin"
                value={formValues.priceMin}
                placeholder="Mínima"
                onChange={(event) => {
                  handleInputChange(event);
                }}
              />
              <input
                type="text"
                name="priceMax"
                value={formValues.priceMax}
                placeholder="Máxima"
                onChange={(event) => {
                  handleInputChange(event);
                  return filterByPrice(formValues.priceMin, event.target.value);
                }}
              />
            </InputGroup>
          </FilterGroup>

          <button
            className="btn btn-primary w-100"
            onClick={() => {
              setList([]);
              formValues.kmMin = "";
              formValues.kmMax = "";
              formValues.priceMin = "";
              formValues.priceMax = "";
            }}
          >
            Limpar filtros
          </button>
        </FilterGroupWrapper>
      </FilterContainer>
    </>
  );
};

export default Filter;
