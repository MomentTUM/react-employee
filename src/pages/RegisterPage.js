import * as React from "react";
import { useState } from "react";
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
  empID: "",
  firstNameTH: "",
  lastNameTH: "",
  firstNameEN: "",
  lastNameEN: "",
  nickName: "",
  departmentID: "",
  positionID: "",
  startDate: "",
  birthDate: "",
  email: "",
  telephone: "",
  statusID: "",
  profilePath: "",
  timestamp: "",
};
export default function RegisterPage() {
  const [input, setInput] = useState(initialInput);

  const handleChangeInput = (e) => {
    setInput({ ...input, [e.target.name]: e.target.value });
  };

  const handleSubmitForm = async (e) => {
    try {
      e.preventDefault();
      console.log(">>>>>>>>>>>>>>><<<<<<<<<<<<<<<", input);
      const res = await api.createEmployee(input)
      setInput(initialInput);
      alert("Register Success");
    } catch (error) {
      console.log(error.data.message);
    }
  };
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
        <Box
          component="form"
          onSubmit={handleSubmitForm}
          noValidate
          sx={{ mt: 3 }}
        >
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
                value={input.lastNameEN}
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
                value={input.firstNameTH}
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
                value={input.lastNameTH}
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
                value={input.nickName}
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
                value={input.telephone}
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
                value={input.email}
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
                value={input.birthDate}
                type="date"
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
                value={input.startDate}
                type="date"
                InputLabelProps={{ shrink: true }}
                onChange={handleChangeInput}
              />
            </Grid>
            <Grid item xs={4}>
              <SelectDepartment
                input={input}
                setInput={setInput}
                name="departmentId"
                onChange={handleChangeInput}
              />
            </Grid>
            <Grid item xs={4}>
              <SelectPosition
                input={input}
                setInput={setInput}
                onChange={handleChangeInput}
              />
            </Grid>
            <Grid item xs={4}>
              <SelectStatus
                input={input}
                setInput={setInput}
                onChange={handleChangeInput}
              />
            </Grid>
            <Grid item xs={6}>
              <TextField
                name="profilePath"
                required
                fullWidth
                id="profilePath"
                label="profilePath"
                value={input.profilePath}
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
                value={input.timestamp}
                type="date"
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
