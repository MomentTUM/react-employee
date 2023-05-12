import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { AppBar, Toolbar, Typography, Container } from "@mui/material";
import BottomNavigation from "@mui/material/BottomNavigation";
import BottomNavigationAction from "@mui/material/BottomNavigationAction";
import GroupsIcon from "@mui/icons-material/Groups";
import PersonAddAlt1Icon from "@mui/icons-material/PersonAddAlt1";
import Diversity3Icon from "@mui/icons-material/Diversity3";

export default function Header() {
  const navigate = useNavigate();
  const [value, setValue] = useState("employees");

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  const handleClickRegister = () => {
    navigate("employee/register");
  };
  const handleClickEmployees = () => {
    navigate("/");
  };

  return (
    <AppBar position="static" color="primary">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Diversity3Icon
            sx={{ display: { xs: "flex", md: "flex" }, mr: 1, width: 50 }}
          />
          <Typography
            variant="h6"
            noWrap
            component="a"
            sx={{
              mr: 2,
              display: { xs: "none", md: "flex" },
              fontFamily: "inherit",
              fontWeight: 700,
              letterSpacing: ".3rem",
              color: "inherit",
              textDecoration: "none",
            }}
          >
            Employee
          </Typography>
          <BottomNavigation
            sx={{
              flexGrow: 1,
              display: { xs: "flex", md: "flex", justifyContent: "end" },
              backgroundColor: "inherit",
              width: 500,
            }}
            value={value}
            onChange={handleChange}
          >
            <BottomNavigationAction
              onClick={handleClickRegister}
              label={<span style={{ color: "silver" }}>Register</span>}
              value="register"
              icon={<PersonAddAlt1Icon style={{ color: "silver" }} />}
            />
            <BottomNavigationAction
              onClick={handleClickEmployees}
              label={<span style={{ color: "silver" }}>Employees</span>}
              value="employees"
              icon={<GroupsIcon style={{ color: "silver" }} />}
            />
          </BottomNavigation>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
