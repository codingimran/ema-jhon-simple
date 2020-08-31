import React from "react";
import { useParams, Link } from "react-router-dom";
import fakeData from "../../fakeData";
import Product from "../Product/Product";
const ProductKey = () => {
  const { key } = useParams();
  const product = fakeData.find((pd) => pd.key === key);
  console.log(product);
  return (
    <>
      <Link to="/">Back</Link>
      <h1 className="tc mb4">Your Product Details</h1>
      {/* <div className="image">
        <img src={product.img} alt="Product" />
      </div>
      <div className="details">
        <div className="name">{product.name}</div>
        <a href={product.url} target="_blank" rel="noopener noreferrer">
          Visit
        </a>
      </div> */}
      <Product showAddCardBtn={false} product={product}></Product>
    </>
  );
};

export default ProductKey;
