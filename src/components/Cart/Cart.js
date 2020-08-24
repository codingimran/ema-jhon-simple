import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "tachyons";
import "./Cart.css";
const CartItems = (props) => {
  const cart = props.cartAddedProduct;
  const totalPrice = cart.reduce((total, product) => total + product.price, 0);
  const totalShiping = cart.reduce(
    (total, product) => total + product.shipping,
    0
  );
  const tax = ((totalPrice + totalShiping) * 0.1).toFixed(2);
  console.log(tax);
  // total without tax
  const totalWithOutTax = parseFloat(totalPrice + totalShiping).toFixed(2);
  // total with tax
  const totalWithTax =
    parseFloat(totalPrice) + parseFloat(totalShiping) + parseFloat(tax);
  return (
    <div>
      <h5 className="tc .bb">Order Summary</h5>
      <p className="tc">Items ordered: {cart.length}</p>
      <table>
        <tbody>
          <tr>
            <td>TotalPrice:</td>
            <td>&#x24;{totalPrice.toFixed(2)}</td>
          </tr>
          <tr>
            <td>Shipping & Handiling:</td>
            <td>&#x24;{totalShiping.toFixed(2)}</td>
          </tr>
          <tr>
            <td>Total before tax:</td>
            <td>
              &#x24;
              {totalWithOutTax}
            </td>
          </tr>
          <tr>
            <td>Tax:</td>
            <td>&#x24;{tax}</td>
          </tr>
          <tr>
            <td>Total With tax:</td>
            <td>
              &#x24;
              {totalWithTax.toFixed(2)}
            </td>
          </tr>
        </tbody>
      </table>
      <div className="tc">
        <button
          className="btn-place-order mt3"
          onClick={() => alert("Order Placed Hurry!.........")}
        >
          Place Order
        </button>
        <marquee className="mt5 f1">Imran Khan</marquee>
      </div>
    </div>
  );
};

export default CartItems;
