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
  if (isEmpty)
    return (
      <div>
        <section className="h-100" style={{ backgroundColor: "#eee" }}>
          <div className="container h-100 py-5">
            <div className="row d-flex justify-content-center align-items-center h-100">
              <div className="col-10">
                <div className="d-flex justify-content-between align-items-center mb-4">
                  <h3 className="fw-normal mb-0 text-black">
                    Shopping Cart: {totalItems}
                  </h3>
                </div>

                <div className="card rounded-3 mb-4">
                  <div className="card-body p-4 w-100 ">
                    <div className="row d-flex justify-content-between align-items-center">
                      <div className="col-md-2 col-lg-2 col-xl-2"></div>{" "}
                      <p className="card-title lead fw-normal mb-2">
                        No item added
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  return (
    <div>
      <section className="h-100" style={{ backgroundColor: "#eee" }}>
        <div className="container h-100 py-5">
          <div className="row d-flex justify-content-center align-items-center h-100">
            <div className="col-10">
              <div className="d-flex justify-content-between align-items-center mb-4">
                <h3 className="fw-normal mb-0 text-black">
                  Shopping Cart: {totalItems}
                </h3>
                <div>
                  <p className="mb-0">
                    <span className="text-muted">Sort by:</span>
                    <a href="#!" className="text-body">
                      price <i className="fas fa-angle-down mt-1"></i>
                    </a>
                  </p>
                </div>
              </div>
              {items.map((item) => {
                return (
                  <div className="card rounded-3 mb-4">
                    <div className="card-body p-4 w-100 ">
                      <div className="row d-flex justify-content-between align-items-center">
                        <div className="col-md-2 col-lg-2 col-xl-2">
                          <img
                            src={item.img}
                            className="img-fluid rounded-3"
                            alt="cart"
                          />
                        </div>
                        <div className="col-md-3 col-lg-3 col-xl-3">
                          <p className="card-title lead fw-normal mb-2">
                            {item.title}
                          </p>
                          <p>
                            <span className="text-muted">Code: </span>
                            {item.code}
                          </p>
                        </div>
                        <div className="col-md-3 col-lg-3 col-xl-2 d-flex">
                          <button
                            className="btn btn-link px-2"
                            onClick={() =>
                              updateItemQuantity(item.id, item.quantity - 1)
                            }
                          >
                            <i className="fas fa-minus"></i>
                          </button>

                          <input
                            id="form1"
                            min="0"
                            name="quantity"
                            value={item.quantity}
                            type="number"
                            className="form-control form-control-sm"
                          />

                          <button
                            className="btn btn-link px-2"
                            onClick={() =>
                              updateItemQuantity(item.id, item.quantity + 1)
                            }
                          >
                            <i className="fas fa-plus"></i>
                          </button>
                        </div>
                        <div className="col-md-3 col-lg-2 col-xl-2 offset-lg-1">
                          <h5 className="mb-0">${item.price}</h5>
                        </div>
                        <div className="col-md-1 col-lg-1 col-xl-1 text-end">
                          <a href="#!" className="text-danger">
                            <i
                              className="fas fa-trash fa-lg"
                              onClick={() => removeItem(item.id)}
                            ></i>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
              <div className="card mb-4 ">
                <div className="card-body  w-100">
                  <div className="card-body p-4 d-flex flex-row w-50">
                    <div className="form-outline flex-fill ">
                      <input
                        type="text"
                        className="form-control"
                        id="form1"
                        aria-describedby="formHelp"
                        placeholder="Promo Code"
                      />
                    </div>
                    <button
                      type="button"
                      className="btn btn-outline-warning ms-3 "
                    >
                      Apply
                    </button>
                  </div>

                  <div className="float-end ">
                    <p className="mb-0 me-5 d-flex align-items-center">
                      <span className="small text-muted me-2">
                        Order total:
                      </span>{" "}
                      <span className="lead fw-normal">${cartTotal}</span>
                    </p>
                  </div>
                </div>
              </div>
              <div className="card">
                <div className="card-body w-100 ">
                  <button
                    type="button"
                    className="btn btn-warning btn-block btn-lg col-md-3 col-lg-2 col-xl-12"
                  >
                    Proceed to Pay
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Cart;
