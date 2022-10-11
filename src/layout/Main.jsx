import React from "react";
import { Header } from "../components/Header/Header";
import { GlobalStyles } from "../partials/Global";
import Menu from "../components/Menu/Menu";
import ChannelManage from "../components/ChannelPage/ChannelManage/ChannelManage";
import { Routes, Route } from "react-router-dom";
import { Users } from "../components/Users/Users";
import { Welcome } from "../components/Welcome/Welcome";
export const Main = () => {
  return (
    <div>
      <GlobalStyles />
      <Header />
      <Menu />
      <Routes>
        <Route path="/" element={<Welcome />} />
        <Route path="/channelmanage" element={<ChannelManage />} />
        <Route path="/users" element={<Users />} />
      </Routes>
    </div>
  );
};
