import React from "react";
import { Navigate, Outlet } from "react-router-dom";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";

export const PrivateRoute = () => {
  let token = true;

  return (
    <>
      <Header />
      <Sidebar />
      {token ? <Outlet /> : <Navigate to="modal" />}
    </>
  );
};
