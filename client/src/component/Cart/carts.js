import React from "react";
import "./cart.css";
import { useCart } from "react-use-cart";
const Cart = () => {
  const {
    isEmpty,
    items,
    updateItemQuantity,
    cartTotal,
    totalItems,
    removeItem,
  } = useCart();
  if (isEmpty) return <h1 className="text-center">Your cart is empty</h1>;
  return (
    <section className="py-4 container">
      <div className="row justify-content-center">
        <div className="col-12">
          <h5>Cart ({totalItems})</h5>
          <table className="table table-light table-hover m-0">
            <tbody>
              {items.map((item) => {
                return (
                  <tr key={item.id}>
                    <td>
                      <img src={item.img} alt="" style={{ height: "3rem" }} />
                    </td>
                    <td>{item.title}</td>
                    <td>&times;</td>
                    <td>$ {item.price} </td>
                    <td>quantity({item.quantity})</td>
                    <td>
                      <button
                        className="btn btn-info ms-2"
                        onClick={() =>
                          updateItemQuantity(item.id, item.quantity - 1)
                        }
                      >
                        -
                      </button>
                      <button
                        className="btn btn-info ms-2"
                        onClick={() =>
                          updateItemQuantity(item.id, item.quantity + 1)
                        }
                      >
                        +
                      </button>{" "}
                      <button
                        className="btn btn-danger ms-2"
                        onClick={() => removeItem(item.id)}
                      >
                        remove
                      </button>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
        <div className="col-auto ms-auto">
          <h2>Total Price: {cartTotal}/-</h2>
        </div>
      </div>
    </section>
  );
};

export default Cart;
