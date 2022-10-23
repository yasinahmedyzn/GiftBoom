import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { useCart } from "react-use-cart";
const ProductList = (props) => {
  const { addItem } = useCart();
  return (
    <Card sx={{ maxWidth: 345 }} key={props.id}>
      <CardMedia
        component="img"
        alt="green iguana"
        height="140"
        image={props.img}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {props.title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          code: {props.code}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">${props.price}</Button>
        <Button size="small">add to cart</Button>
      </CardActions>
    </Card>
  );
};

export default ProductList;
