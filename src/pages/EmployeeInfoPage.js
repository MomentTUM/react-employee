import CssBaseline from "@mui/material/CssBaseline";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import * as api from "../api";

export default function EmployeeInfo() {
  const params = useParams()
  console.log("parammmm",params)
  const [person, setPerson] = useState(null);

  useEffect(() => {
    const fetchPerson = async () => {
      const res = await api.getEmployeeById(params.id);
      // const res = await api.getAllEmployee();
      // console.log("++++++",res)
      console.log("++++++",res)
      setPerson(res);
    };
    fetchPerson();
  }, []);
  return (
    <Grid
      container
      component="main"
      sx={{ width: "100vw", justifyContent: "center",maxHeight:'300px' }}
    >
      <CssBaseline />
      <Grid
        item
        xs={false}
        sm={4}
        md={5}
        sx={{
          backgroundImage: "url(https://picsum.photos/1000)",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
        }}
      />
      <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
        <Box
          sx={{
            my: 8,
            mx: 4,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Typography component="h1" variant="h5">
            {person?.firstNameEN} {person?.lastNameEN}
          </Typography>
          <Typography component="p" variant="p">
            FirstNameTH LastNameTH
          </Typography>
          <Box component="form" noValidate sx={{ mt: 1 }}>
            <Box sx={{ display: "flex", justifyContent: "space-between" }}>
              <p>ID: 10001</p>
              <p>nickName</p>
            </Box>
            <Box>
              <p>Email: test@gmail.com</p>
              <p>Telephone : 0123456789</p>
              <p>birthDate : 01/01/2023</p>
              <p>department : Web developer</p>
            </Box>
          </Box>
        </Box>
      </Grid>
    </Grid>
  );
}
