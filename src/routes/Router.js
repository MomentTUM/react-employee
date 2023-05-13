import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "../component/Layout";
import HomePage from "../pages/HomePage";
import RegisterPage from "../pages/RegisterPage";
import EmployeeInfoPage from "../pages/EmployeeInfoPage";
// import TestRegister from "../pages/TestRegister";

export default function Router() {
  const router = createBrowserRouter([
    {
      element: <Layout />,
      children: [
        { path: "/", element: <HomePage/> },
        // { path: "/employee/register", element: <RegisterPage /> },
        { path: "/employee/register", element: <RegisterPage /> },
        { path: "/employee/:id", element: <EmployeeInfoPage /> },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
}
