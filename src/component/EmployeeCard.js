import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";

export default function EmployeeCard() {
  return (
    <Card sx={{ width: 200, height: 300, my: 2 }}>
      <CardActionArea sx={{height:160}}>
        <CardMedia
          component="img"
          height="100%"
          image="https://picsum.photos/1000"
          alt="test"
        />
        <CardContent>
          <Typography gutterBottom variant="h6" component="div" lineHeight={1}>
            id:0001
          </Typography>
          <Typography variant="body3" color="text.secondary">
            <p>FirstName</p>
            <p>LastName</p>
            <p>nickName</p>
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}
