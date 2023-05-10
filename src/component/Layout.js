import React from "react";
import { Outlet } from "react-router-dom";
import Header from "../component/Header";
import Container from "@mui/material/Container";


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
        <Outlet/>
      </Container>
    </>
  );
}
