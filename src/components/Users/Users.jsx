import React, { useState } from "react";
import {
  Container,
  FilterHeader,
  Filters,
  FilterList,
  FilterBody,
  Form,
  FilterUsed,
} from "./style/Users.style";
import ListData from "../ListData/ListData";
import { titleData, bodyData } from "../../partials/data";

export const Users = () => {
  const [activeFilter, setActiveFilter] = useState(true);

  return (
    <>
      <Container>
        <FilterHeader>
          <h2>کاربران</h2>
          <Filters>
            <FilterList>
              <li>
                <img src="/assets/Frame/plus.svg" alt="add" />
              </li>
              <li>
                <img
                  onClick={() =>
                    setActiveFilter((prevactiveFilter) => !prevactiveFilter)
                  }
                  src="/assets/Frame/filter.svg"
                  alt="filter"
                />
              </li>
              <li>
                <img src="/assets/Frame/refrsh.svg" alt="refresh" />
              </li>
            </FilterList>
          </Filters>
        </FilterHeader>
        {activeFilter && (
          <FilterBody>
            <h3>جستجو و فیلتر</h3>
            <Form>
              <input
                type="text"
                placeholder="لطفا نام و نام خانوادگی را وارد کنید"
              />
              <input type="text" placeholder="لطفا نام کاربری را وارد کنید" />
              <input type="text" placeholder="لطفا کد ملی را وارد کنید" />
              <input type="text" placeholder="لطفا شماره موبایل را وارد کنید" />
              <select name="بنگاه">
                <option value="انتخاب بنگاه">انتخاب بنگاه</option>
              </select>
              <select name="نقش">
                <option value="انتخاب نقش">انتخاب نقش</option>
              </select>
            </Form>
            <FilterUsed>
              <h3>فیلتر ها اعمال شده</h3>
            </FilterUsed>
          </FilterBody>
        )}
      </Container>
      <ListData hasCheckbox={true} titleData={titleData} bodyData={bodyData} />
    </>
  );
};
