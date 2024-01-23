import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const ProductDetails = () => {
  const [product, setProduct] = useState([]);

  const params = useParams();

  useEffect(() => {
    fetchProductDetails();
  }, []);

  const fetchProductDetails = async () => {
    const productData = await fetch(
      "https://dummyjson.com/products/" + params.productId
    );
    const productDataJson = await productData.json();
    setProduct(productDataJson);
  };

  const { title, thumbnail, description, price, discountPercentage, rating } =
    product;

  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col"></div>
          <div className="col-6">
            <div className="card mb-3">
              <img src={thumbnail} className="img-thumbnail" alt="..."></img>
              <div className="card-body">
                <h5 className="card-title">{title}</h5>
                <p className="card-text">{description}</p>
                <p className="card-text">{price}</p>
                <p className="card-text">{discountPercentage}</p>
                <p className="card-text">{rating}</p>
                <p className="card-text">
                  <small className="text-muted">Last updated 3 mins ago</small>
                </p>
              </div>
            </div>
          </div>
          <div className="col"></div>
        </div>
      </div>
    </>
  );
};

export default ProductDetails;
