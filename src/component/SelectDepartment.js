import * as React from "react";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import * as api from "../api";
import { useState, useEffect } from "react";

export default function SelectDepartment() {
  const [departments, setDepartments] = useState([]);
  const [department, setDepartment] = useState('');

  useEffect(() => {
    const fetchDepartments = async () => {
      const res = await api.getAllDepartment();
      setDepartments(res);
    };
    fetchDepartments();
  }, []);

  const handleChange = (event) => {
    setDepartment(event.target.value);
  };
  return (
    <Box sx={{ minWidth: 120 }}>
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">Department</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={department}
          label="status"
          onChange={handleChange}
        >
          {departments.map((el) => {
            return (
              <MenuItem key={el.departmentID} value={el.departmentID}>
                {el.fullNameEN}
              </MenuItem>
            );
          })}
        </Select>
      </FormControl>
    </Box>
  );
}
