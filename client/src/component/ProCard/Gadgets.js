import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { gadget_list } from "./data";
import { useCart } from "react-use-cart";
const Gadgets = () => {
  const { addItem } = useCart();

  return (
    <div className="container px-4">
      <div className=" row ">
        {gadget_list.map((item) => {
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
                  {item.code}
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

export default Gadgets;
