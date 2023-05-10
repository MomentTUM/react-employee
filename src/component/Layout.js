import React from "react";
import { Outlet, Link, NavLink, useNavigate } from "react-router-dom";
import Header from "../component/Header";
import RegisterPage from "../pages/RegisterPage";
import Container from "@mui/material/Container";
import HomePage from "../pages/HomePage";
import EmployeeInfo from "../pages/EmployeeInfo";


export default function Layout() {
  return (
    <>
      <Header />
      <Container
        maxWidth="md"
        sx={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "space-evenly",
          bgcolor: "#C0C0C0",
          minHeight: "100vh",
          py: 5,
        }}
      >
        <HomePage/>
        {/* <RegisterPage /> */}
        {/* <EmployeeInfo/> */}
      </Container>
    </>
  );
}
