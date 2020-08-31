import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../Shop/Shop2.css";
import "tachyons";
import fakeData from "../../fakeData";
import Product from "../Product/Product";
import CartItems from "../Cart/Cart";
import {
  addToDatabaseCart,
  getDatabaseCart,
} from "../../utilities/databaseManager";
import { useEffect } from "react";
import { Link } from "react-router-dom";
const Shop2 = () => {
  const first10 = fakeData.slice(0, 10);
  const [products, setProducts] = useState(first10);
  const [cart, setCart] = useState([]);

  useEffect(() => {
    const savedCart = getDatabaseCart();
    console.log(savedCart);
    const productKeys = Object.keys(savedCart);
    const previousCard = productKeys.map((existingKey) => {
      const product = fakeData.find((pd) => pd.key === existingKey);
      product.quantity = savedCart[existingKey];
      return product;
    });
    setCart(previousCard);
  }, []);

  const handleAddProduct = (product) => {
    // console.log(product);
    const productToBeAdded = product.key;
    const sameProduct = cart.find((pd) => pd.key === product.key);
    // debugger;
    let count = 1;
    let newCart;
    if (sameProduct) {
      count = sameProduct.quantity + 1;
      sameProduct.quantity = count;

      const others = cart.filter((pd) => pd.key !== productToBeAdded);
      newCart = [...others, sameProduct];
    } else {
      product.quantity = 1;
      newCart = [...cart, product];
    }
    // const count = sameProduct.length;

    // const newcart = [...cart, product];
    setCart(newCart);

    addToDatabaseCart(product.key, count);
  };
  return (
    <div className="shop-container d-flex">
      {/* Product Container */}
      <div className="product-container pt3">
        <ul>
          {products.map((item) => (
            <Product
              product={item}
              handleAddProduct={handleAddProduct}
              key={item.key}
              showAddCardBtn={true}
            ></Product>
          ))}
        </ul>
      </div>
      <div className="cart-container mt3 mx-auto">
        <CartItems cartAddedProduct={cart}>
          <Link to="/order">
            <button className="btn-place-order mt3">Review Order</button>
          </Link>
        </CartItems>
      </div>
    </div>
  );
};

export default Shop2;
