import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import Cart from "../Cart/Cart";
import HappyImg from "../../images/giphy.gif";
import {
  getDatabaseCart,
  removeFromDatabaseCart,
  processOrder,
} from "../../utilities/databaseManager";
import fakeData from "../../fakeData";
import Review from "../Review/Review";
import { Link } from "react-router-dom";
const Order = () => {
  const [cart, setCart] = useState([]);
  const handleRemoveProduct = (productKey) => {
    console.log("remove clicked", productKey);
    const newCart = cart.filter((pd) => pd.key !== productKey);
    setCart(newCart);
    removeFromDatabaseCart(productKey);
  };
  useEffect(() => {
    const savedCart = getDatabaseCart();
    const productKeys = Object.keys(savedCart);
    const cartProducts = productKeys.map((key) => {
      const product = fakeData.find((pd) => pd.key === key);

      product.quantity = savedCart[key];
      console.log(product.quantity);
      return product;
    });
    setCart(cartProducts);
  }, []);
  // console.log(cart);
  const hanglePlaceOrder = () => {
    setCart([]);
    processOrder();
  };
  return (
    <div>
      <Link to="/">
        <button className="btn btn-danger mt1 ml1">Go Back</button>
      </Link>
      <div className="flex justify-center">
        <div className="product-container">
          {cart.map((pd) => {
            return (
              <Review
                product={pd}
                key={pd.key}
                handleRemoveProduct={handleRemoveProduct}
              ></Review>
            );
          })}
        </div>

        <div className="cart-container">
          <Cart cartAddedProduct={cart}>
            <Link to="/order-success">
              <button
                onClick={() => hanglePlaceOrder()}
                className="btn-place-order mt3"
              >
                Place Order
              </button>
            </Link>
          </Cart>
        </div>
      </div>
    </div>
  );
};

export default Order;
