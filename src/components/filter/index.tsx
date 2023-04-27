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

const Filter = ({
  brands,
  models,
  colors,
  years,
  fuels,
  handleSetQuery,
}: IHomeFilter) => {
  const [openFilter, setOpenFilter] = useState("close");
  const { getCarsBrand, fipeTable }: any = useContext(ContextApi);

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
            <ul>
              {Object.keys(fipeTable).map((keys) => (
                <p>{keys}</p>
              ))}
              <FilterList
                className="heading-6"
                onClick={() => getCarsBrand()}
              ></FilterList>
            </ul>
          </FilterGroup>
          <FilterGroup id="modelo">
            <h3 className="heading-4">Modelo</h3>
            <FilterList className="heading-6">
              <li>Civic</li>
              <li>Corolla</li>
              <li>Cruze</li>
              <li>Fit</li>
              <li>Gal</li>
              <li>Ka</li>
              <li>Onix</li>
              <li>Porsche 718</li>
            </FilterList>
          </FilterGroup>
          <FilterGroup id="cor">
            <h3 className="heading-4">Cor</h3>
            <FilterList className="heading-6">
              <li>Azu</li>
              <li>Branca</li>
              <li>Cinza</li>
              <li>Prata</li>
              <li>Preta</li>
              <li>Verde</li>
            </FilterList>
          </FilterGroup>
          <FilterGroup id="ano">
            <h3 className="heading-4">Ano</h3>
            <FilterList className="heading-6">
              <li>2022</li>
              <li>2021</li>
              <li>2018</li>
              <li>2015</li>
              <li>2013</li>
              <li>2012</li>
              <li>2010</li>
            </FilterList>
          </FilterGroup>
          <FilterGroup id="combustivel">
            <h3 className="heading-4">Combustível</h3>
            <FilterList className="heading-6">
              <li>Diesel</li>
              <li>Etanol</li>
              <li>Gasolina</li>
              <li>Flex</li>
            </FilterList>
          </FilterGroup>
          <FilterGroup id="km">
            <h3 className="heading-4">Km</h3>
            <InputGroup>
              <input type="text" placeholder="Mínima" />
              <input type="text" placeholder="Máxima" />
            </InputGroup>
          </FilterGroup>
          <FilterGroup id="preco">
            <h3 className="heading-4">Preço</h3>
            <InputGroup>
              <input type="text" placeholder="Mínima" />
              <input type="text" placeholder="Máxima" />
            </InputGroup>
          </FilterGroup>

          <button className="btn btn-primary w-100">Limpar filtros</button>
        </FilterGroupWrapper>
      </FilterContainer>
    </>
  );
};

export default Filter;
