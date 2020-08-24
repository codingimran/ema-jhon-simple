import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Product.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
const Product = (props) => {
  const product = props.product;
  //   console.log(product);
  const { name, img, seller, price, stock } = props.product;

  return (
    <div className="d-flex  flex-md-nowrap flex-wrap align-self-sm-center mb5 border-bottom pb2">
      <div className="product-image ">
        <img src={img} alt="Product" className="img-fluid product-image " />
      </div>
      <div className="product-info">
        <p className="text-primary font-weight-bold">{name}</p>
        <div className="row">
          <div className="col-md-5 col-12">
            <div className="product-sub-container">
              <p>
                By <small>{seller}</small>
              </p>
              <p>&#x24;{price}</p>
              <p>
                <small>
                  only <span className="text-danger">{stock}</span> left in
                  stock - order soon
                </small>
              </p>
              <button
                className="add-cart-btn"
                onClick={() => props.handleAddProduct(props.product)}
              >
                <FontAwesomeIcon icon={faShoppingCart} />
                <span>add to cart</span>
              </button>
            </div>
          </div>
          <div className="col-xl-5 col-md-12 col-12 mt3">
            <p>{product.star}</p>
            <h5>Features</h5>
            <ul className="features-ul">
              {product.features.map((features) => {
                return (
                  <li>
                    <small>
                      {features.description}: <strong>{features.value}</strong>
                    </small>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Product;
