import React, { useState } from "react";
import fakeData from "../../fakeData/";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Shop.css";
import "tachyons";

const Shop = () => {
  const first10 = fakeData.slice(0, 10);
  const [products, setProducts] = useState(() => first10);
  console.log(products);
  return (
    <div className="row">
      <div className="col-9 ml5">
        <div className="shop-main-div">
          <div className="product-main-container">
            {products.map((item) => {
              return (
                <div className="flex mr5 mb5">
                  {/* Product Image */}
                  <div className="product-image">
                    <img src={item.img} alt="Product" className="mw5" />
                  </div>
                  {/* Product details */}
                  <div className="product-details ml4">
                    <h4 className="item-header tc">{item.name}</h4>
                    <p>
                      By <small>{item.seller}</small>
                    </p>
                    {/* Price stock & add to cart & Product Rating And Features Main Section */}
                    <div className="info-container flex justify-between">
                      {/* Price stock & add to cart section */}
                      <div className="info-sub-container-one">
                        <p>&#x24;{item.price}</p>
                        <p>only {item.stock} left in stock - order soon</p>
                        <button className="cart-btn">
                          <i className="fa fa-shopping-cart"></i>
                          <span>add to cart</span>
                        </button>
                      </div>
                      {/* Product Rating And Features Section */}
                      <div className="info-sub-container-two ml4 mr4">
                        <p className="tc">{item.star}</p>
                        <h3 className="tc">Features</h3>
                        <ul className="gray">
                          {item.features.map((feature) => {
                            return (
                              <li>
                                <small>
                                  {feature.description} :{" "}
                                  <strong>{feature.value}</strong>
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
            })}
          </div>
        </div>
      </div>
      <div className="col-2">
        {/* Order Summery main Section */}
        <div className="order-main-container">
          <h3>Order Summary</h3>
          <p>Items ordered : 1</p>
          <div className="flex">
            <p>Items:</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Shop;
