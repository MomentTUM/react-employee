import * as React from "react";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import * as api from "../api";
import { useState, useEffect } from "react";

export default function SelectStatus({ input, setInput }) {
  const [statuses, setStatuses] = useState([]);
  const [status, setStatus] = useState("");

  useEffect(() => {
    const fetchStatuses = async () => {
      const res = await api.getAllStatus();
      setStatuses(res);
    };
    fetchStatuses();
  }, []);

  const handleChangeInput = (e) => {
    setStatus(e.target.value);
    setInput({ ...input, statusID: e.target.value });
  };

  return (
    <Box sx={{ minWidth: 120 }}>
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">Status</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={input.statusID}
          label="status"
          onChange={handleChangeInput}
        >
          {statuses.map((el) => {
            return (
              <MenuItem key={el.statusID} value={el.statusID}>
                {el.description}
              </MenuItem>
            );
          })}
        </Select>
      </FormControl>
    </Box>
  );
}
