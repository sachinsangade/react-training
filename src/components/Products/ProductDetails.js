import React, { useContext } from "react";
import { useParams } from "react-router-dom";
import useProductDetails from "../shared/useProductDetails";
import Skeleton from "react-loading-skeleton";
import 'react-loading-skeleton/dist/skeleton.css';
import userContext from "../../utils/UserContext";

const ProductDetails = () => {
  const params = useParams();

  const product = useProductDetails(params);

  const userData = useContext(userContext);

  if (product === null) {
    return <Skeleton count={5} />
  }

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
                <p className="card-text">{userData.loggedInUser}</p>
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
