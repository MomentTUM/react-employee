import * as React from "react";
import { useState, useEffect } from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import SelectStatus from "../component/SelectStatus";
import SelectPosition from "../component/SelectPosition";
import SelectDepartment from "../component/SelectDepartment";

import * as api from "../api";

const initialInput = {
  "empID": "",
  "firstNameTH": "Hello",
  "lastNameTH": "Hello",
  "firstNameEN": "",
  "lastNameEN": "Hello",
  "nickName": "Hello",
  "departmentID": 1,
  "positionID": 1,
  "startDate": "2023-05-11T02:18:49.126Z",
  "birthDate": "2023-05-11T02:18:49.126Z",
  "email": "hello@gmail.com",
  "telephone": "0123456789",
  "statusID": 1,
  "profilePath": "xxx",
  "timestamp": "2023-05-11T02:18:49.126Z"
}
export default function RegisterPage() {
  const [input, setInput] = useState(initialInput);

  const handleChangeInput = e => {
    setInput({ ...input, [e.target.name]: e.target.value });
  };

  const handleSubmitForm = async (e)=>{
    try {
      e.preventDefault();
      console.log(">>>>>>>>>>>>>>><<<<<<<<<",input)
      const res = await api.createEmployee(input)
      console.log(">>>>>>>>>>>>>>>",res)
      setInput(initialInput)
      
    } catch (error) {
      console.log(error)
    }
  }
  return (
    <Container component="main" maxWidth="xs">
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Typography component="h1" variant="h5">
          Sign up
        </Typography>
        <h1></h1>
        <Box component="form" onSubmit={handleSubmitForm} noValidate sx={{ mt: 3 }}>
          <Grid container spacing={1}>
          <Grid item xs={12} sm={2}>
              <TextField
                name="empID"
                required
                fullWidth
                id="empID"
                label="ID"
                type="text"
                value={input.empID}
                autoFocus
                onChange={handleChangeInput}
              />
            </Grid>
            <Grid item xs={12} sm={5}>
              <TextField
                name="firstNameEN"
                required
                fullWidth
                id="firstNameEN"
                label="First Name"
                value={input.firstNameEN}
                type="text"
                onChange={handleChangeInput}
              />
            </Grid>
            <Grid item xs={12} sm={5}>
              <TextField
                name="lastNameEN"
                required
                fullWidth
                id="lastNameEN"
                label="Last Name"
                value={""}
                type="text"
                onChange={handleChangeInput}
              />
            </Grid>
            <Grid item xs={12} sm={4}>
              <TextField
                name="firstNameTH"
                required
                fullWidth
                id="firstNameTH"
                label="ชื่อ"
                value={""}
                type="text"
                onChange={handleChangeInput}
              />
            </Grid>
            <Grid item xs={12} sm={4}>
              <TextField
                name="lastNameTH"
                required
                fullWidth
                id="lastNameTH"
                label="นามสกุล"
                value={""}
                type="text"
                onChange={handleChangeInput}
              />
            </Grid>
            <Grid item xs={12} sm={4}>
              <TextField
                name="nickName"
                required
                fullWidth
                id="nickName"
                label="Nick Name"
                value={""}
                type="text"
                onChange={handleChangeInput}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                name="telephone"
                required
                fullWidth
                id="telephone"
                label="Telephone"
                value={""}
                type="number"
                onChange={handleChangeInput}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                name="email"
                required
                fullWidth
                id="email"
                label="Email Address"
                value={""}
                type="text"
                onChange={handleChangeInput}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                name="birthDate"
                required
                fullWidth
                id="birthDate"
                label="birthDate"
                value={""}
                type="datetime-local"
                InputLabelProps={{ shrink: true }}
                onChange={handleChangeInput}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                name="startDate"
                required
                fullWidth
                id="startDate"
                label="startDate"
                value={""}
                type="datetime-local"
                InputLabelProps={{ shrink: true }}
                onChange={handleChangeInput}
              />
            </Grid>
            <Grid item xs={4}>
              <SelectDepartment value={""} onChange={handleChangeInput}/>
            </Grid>
            <Grid item xs={4}>
              <SelectPosition value={""} onChange={handleChangeInput}/>
            </Grid>
            <Grid item xs={4}>
              <SelectStatus value={""} onChange={handleChangeInput}/>
            </Grid>
            <Grid item xs={6}>
              <TextField
                name="profilePath"
                required
                fullWidth
                id="profilePath"
                label="profilePath"
                value={""}
                type="text"
                onChange={handleChangeInput}
              />
            </Grid>
            <Grid item xs={6}>
              <TextField
                name="timestamp"
                required
                fullWidth
                id="timestamp"
                label="timestamp"
                value={""}
                type="datetime-local"
                InputLabelProps={{ shrink: true }}
                onChange={handleChangeInput}
              />
            </Grid>
          </Grid>
          <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2 }}
          >
            Sign Up
          </Button>
        </Box>
      </Box>
    </Container>
  );
}
