import React from "react";
import { useState, useEffect } from "react";
import EmployeeCard from "../component/EmployeeCard";

import * as api from "../api";
export default function HomePage() {
  const [employees, setEmployees] = useState([]);
  useEffect(() => {
    const fetchEmployees = async () => {
      const res = await api.getAllEmployee();
      setEmployees(res);
    };
    fetchEmployees();
  }, []);
  return (
    <>
      {employees.map(el => (
        <EmployeeCard
          key={el.empID}
          el={el}
        />
      ))}
    </>
  );
}
