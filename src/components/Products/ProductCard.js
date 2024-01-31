import userContext from "../../utils/UserContext";
import { IMG_URL, CRAD_STYLE, CARD_STYLE2, promotedStyle } from "../../utils/constants";
import { useContext } from "react";
import userContext from "../../utils/UserContext"; 

const ProductCard = (props) => {
  const { thumbnail, title, price, description, rating, brand, category } =
    props.product;

  //console.log(props.product)

  const userInfo = useContext(userContext)

  return (
    <div>
      <div className="image-container">
        <img
          src={thumbnail}
          className="card-img-top img-fluid"
          style={CARD_STYLE2}
          alt="..."
        ></img>
      </div>
      <div className="card-body">
        <h5 className="card-title">{title}</h5>
        <p className="card-text">{"$" + price}</p>
      </div>
      <ul className="list-group list-group-flush">
        <li className="list-group-item">{description}</li>
        <li className="list-group-item">{category}</li>
        <li className="list-group-item">{rating}</li>
        <li className="list-group-item">{brand}</li>
      </ul>
      <div className="card-body">
        <a href="#" className="btn btn-primary">
        {userInfo.loggedInUser}
        </a>
      </div>
    </div>
  );
};

// Higher order component

export const PromotedProduct = (ProductCard) => {
  return (props) => {

    return(
      <div>
        <label style={promotedStyle}>Promoted</label>
        <ProductCard {...props} />
      </div>
    )
  }
}

export default ProductCard;
