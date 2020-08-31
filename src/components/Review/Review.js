import React from "react";

const Review = (props) => {
  const { name, quantity, img, key, price } = props.product;
  return (
    <div className="bb b--light-gray flex mt4">
      <div className="img mb3">
        <img src={img} alt="product" />
      </div>
      <div className="details ml4">
        <h4 className="blue f5 mw6">{name}</h4>
        <p>Quantity: {quantity}</p>
        <p>
          <small>${price}</small>
        </p>
        <button
          className="btn-place-order w4 tc"
          onClick={() => props.handleRemoveProduct(key)}
        >
          Remove
        </button>
      </div>
    </div>
  );
};

export default Review;
