import React from "react";
import { ThemeProvider } from "styled-components";
import { theme } from "../partials/theme";
import { Header } from "../components/Header/Header";
import { GlobalStyles } from "../partials/Global";
// import ListData from "../components/ListData/ListData";
// import { titleData, bodyData } from "../partials/data";
import Menu from "../components/Menu/Menu";
import { Users } from "../components/Users/Users";
export const Main = () => {
  return (
    <ThemeProvider theme={theme}>
      <div>
        <GlobalStyles />
        <Header />
        <Menu />
        {/* <ListData
          hasCheckbox={true}
          titleData={titleData}
          bodyData={bodyData}
        /> */}
        <Users />
      </div>
    </ThemeProvider>
  );
};
