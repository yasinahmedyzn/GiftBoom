import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { Link } from "react-router-dom";

const Catagorylist = (props) => {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        component="img"
        alt="green iguana"
        height="140"
        image={props.img}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" text-center component="div">
          {props.title}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small" component={Link} to={"/product/" + props.title}>
          view product
        </Button>
      </CardActions>
    </Card>
  );
};

export default Catagorylist;
