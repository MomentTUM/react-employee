import React from "react";
import { useState, useEffect } from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Box, CardActionArea } from "@mui/material";
// import axios from "axios";
// import { getAllEmployee } from "../api";
import EmployeeCard from "../component/EmployeeCard";

import * as api from "../api";
export default function HomePage() {
  const [employees, setEmployees] = useState([]);
  useEffect(() => {
    const asyncFn = async () => {
      const res = await api.getAllEmployee();
      setEmployees(res);
    };
    asyncFn();
  }, []);
  // useEffect(async()=>{
  //   const response = await getAllEmployee();
  //   setEmployees(response.data.result);
  // },[])
  return (
    <>
      {/* {employees?.map((el) => (
        <Card key={el.id} sx={{ width: 200, height: 300, my: 2 }}>
        <CardActionArea href="/employeeInfo/:id" sx={{height:160}}>
          <CardMedia
            component="img"
            height="100%"
            image="https://picsum.photos/1000"
            alt="test"
          />
          <CardContent>
            <Typography gutterBottom variant="h6" component="div" lineHeight={1}>
              {el.empID}
            </Typography>
            <Box variant="body3" color="text.secondary" fontSize={"12px"}>
              <p>{el.firstNameEN}</p>
              <p>{el.lastNameEN}</p>
              <p>{el.nickName}</p>
            </Box>
          </CardContent>
        </CardActionArea>
      </Card>
      ))} */}
      {employees.map((el) => (
        <div key={el.id}>
          <EmployeeCard
            empID={el.empID}
            firstNameEN={el.firstNameEN}
            lastNameEN={el.lastNameEN}
            nickName={el.nickName}
          />
        </div>
      ))}
    </>
  );
}
