import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Box, CardActionArea } from "@mui/material";

export default function EmployeeCard({ el }) {
  return (
    <Card sx={{ width: 200, height: 300, my: 2 }}>
      <CardActionArea href={`/employee/${el.empID}`} sx={{ height: 160 }}>
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
  );
}
