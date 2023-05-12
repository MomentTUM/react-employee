import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Box, CardActionArea } from "@mui/material";

export default function EmployeeCard({
  empID,
  firstNameEN,
  lastNameEN,
  nickName,
}) {
  return (
    <Card sx={{ width: 200, height: 300, my: 2 }}>
      <CardActionArea href="/employeeInfo/:id" sx={{ height: 160 }}>
        <CardMedia
          component="img"
          height="100%"
          image="https://picsum.photos/1000"
          alt="test"
        />
        <CardContent>
          <Typography gutterBottom variant="h6" component="div" lineHeight={1}>
            {empID}
          </Typography>
          <Box variant="body3" color="text.secondary" fontSize={"12px"}>
            <p>{firstNameEN}</p>
            <p>{lastNameEN}</p>
            <p>{nickName}</p>
          </Box>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}
