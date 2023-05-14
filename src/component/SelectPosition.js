import * as React from "react";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import * as api from "../api";
import { useState, useEffect } from "react";

export default function SelectPosition({input,setInput}) {
  const [positions, setPositions] = useState([]);
  const [position, setPosition] = useState('');

  useEffect(() => {
    const fetchPositions = async () => {
      const res = await api.getAllPosition();
      setPositions(res);
    };
    fetchPositions();
  }, []);
  const handleChangeInput = (e) => {
    setPosition(e.target.value);
    setInput({ ...input, positionID: e.target.value });
  };

  return (
    <Box sx={{ minWidth: 120 }}>
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">Position</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={input.positionID}
          label="position"
          onChange={handleChangeInput}
        >
          {positions.map((el) => {
            return <MenuItem key={el.positionID} value={el.positionID}>{el.nameEN}</MenuItem>;
          })}
        </Select>
      </FormControl>
    </Box>
  );
}
