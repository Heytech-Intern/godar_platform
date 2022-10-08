import React from "react";
import {
  Container,
  FilterHeader,
  Filters,
  FilterList,
} from "./style/Users.style";
import ListData from "../ListData/ListData";
import { titleData, bodyData } from "../../partials/data";

export const Users = () => {
  return (
    <Container>
      <FilterHeader>
        <h2>کاربران</h2>
        <Filters>
          <FilterList>
            <li>
              <img src="/assets/Frame/plus.svg" alt="add" />
            </li>
            <li>
              <img src="/assets/Frame/filter.svg" alt="filter" />
            </li>
            <li>
              <img src="/assets/Frame/refrsh.svg" alt="refresh" />
            </li>
          </FilterList>
        </Filters>
      </FilterHeader>
      <ListData hasCheckbox={true} titleData={titleData} bodyData={bodyData} />
    </Container>
  );
};
