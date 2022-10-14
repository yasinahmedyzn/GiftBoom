import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import list from "./data";
import { useCart } from "react-use-cart";
const Electronic = () => {
  const { addItem } = useCart();

  return (
    <div className="container px-4">
      <div className=" row ">
        {list.map((item) => {
          return (
            <Card sx={{ maxWidth: 345 }} key={item.id}>
              <CardMedia
                component="img"
                alt="green iguana"
                height="140"
                image={item.img}
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  {item.title}
                </Typography>
                <Typography gutterBottom variant="h5" component="div">
                  {item.author}
                </Typography>
              </CardContent>
              <CardActions>
                <Button size="small">{item.price}</Button>
                <Button size="small" onClick={() => addItem(item)}>
                  add to cart
                </Button>
              </CardActions>
            </Card>
          );
        })}
      </div>
    </div>
  );
};

export default Electronic;
