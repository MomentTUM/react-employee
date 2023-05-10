import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "../component/Layout";
import HomePage from "../pages/HomePage";
import RegisterPage from "../pages/RegisterPage";
import EmployeeInfo from "../pages/EmployeeInfo";

export default function Router() {
  const router = createBrowserRouter([
    {
      element: <Layout />,
      children: [
        { path: "/", element: <HomePage /> },
        { path: "/register", element: <RegisterPage /> },
        { path: "/employeeIfo/:id", element: <EmployeeInfo /> },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
}
