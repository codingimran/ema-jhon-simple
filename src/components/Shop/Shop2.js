import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../Shop/Shop2.css";
import "tachyons";
import fakeData from "../../fakeData";
import Product from "../Product/Product";
import CartItems from "../Cart/Cart";
const Shop2 = () => {
  const first10 = fakeData.slice(0, 10);
  const [products, setProducts] = useState(first10);
  const [cartProduct, setCartProduct] = useState([]);
  const handleAddProduct = (product) => {
    const newCartProduct = [...cartProduct, product];
    setCartProduct(newCartProduct);
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
            ></Product>
          ))}
        </ul>
      </div>
      <div className="cart-container mt3 mx-auto">
        <CartItems cartAddedProduct={cartProduct}></CartItems>
      </div>
    </div>
  );
};

export default Shop2;
