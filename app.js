import React from "react";
import ReactDOM from "react-dom/client";
import "bootstrap/dist/css/bootstrap.min.css";
import banner from '/assets/banner2.jpg';

const cardStyle = {
    width: '18rem',
    marginRight: '20px'
}

//const cloudinaryImgUrl = "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/";

const restaurants = [
    {
        "id": "253596",
        "name": "Burger King",
        "cloudinaryImageId": "e33e1d3ba7d6b2bb0d45e1001b731fcf",
        "locality": "Tathawade",
        "areaName": "Tathawade",
        "costForTwo": "₹350 for two",
        "cuisines": [
            "Burgers",
            "American"
        ],
        "avgRating": 4.2,
        "parentId": "166",
        "avgRatingString": "4.2",
    },
    {
        "id": "260823",
        "name": "La Pino'z Pizza",
        "cloudinaryImageId": "hfwa38io1akqusshdyug",
        "locality": "Wakad",
        "areaName": "Wakad",
        "costForTwo": "₹200 for two",
        "cuisines": [
            "Pizzas",
            "Pastas",
            "Italian",
            "Desserts",
            "Beverages"
        ],
        "avgRating": 3.9,
    },
    {
        "id": "191350",
        "name": "The Biryani Life",
        "cloudinaryImageId": "lty4isqdfahqevv9ua7e",
        "locality": "PCMC",
        "areaName": "Ravet",
        "costForTwo": "₹250 for two",
        "cuisines": [
            "Biryani",
            "Mughlai",
            "Lucknowi",
            "Hyderabadi",
            "Kebabs",
            "Desserts",
            "Beverages"
        ],
        "avgRating": 4.3,
    },
]

const App = () => {
    return (

        <div className="container">
            <div className="row">
                <Navbar />

                <Carousel />

                { restaurants.map((restaurant) => (
                    <RestaurantCard restaurants = {restaurant} />
                )) }

                {/* <RestaurantCard restaurants = { restaurants[0] } />
                <RestaurantCard restaurants = { restaurants[1] } />
                <RestaurantCard restaurants = { restaurants[2] } />
                 */}


                {/* <RestaurantCard />
                <RestaurantCard />
                <RestaurantCard /> */}
            </div>
        </div>

    )
}


const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="container">
                <a className="navbar-brand" href="#">Food Delivery</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
                    data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false"
                    aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <a className="nav-link active" aria-current="page" href="#">Home</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Link</a>
                        </li>
                        <li className="nav-item dropdown">
                            <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button"
                                data-bs-toggle="dropdown" aria-expanded="false">
                                Dropdown
                            </a>
                            <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                                <li><a className="dropdown-item" href="#">Action</a></li>
                                <li><a className="dropdown-item" href="#">Another action</a></li>
                                <li>
                                    <hr className="dropdown-divider"></hr>
                                </li>
                                <li><a className="dropdown-item" href="#">Something else here</a></li>
                            </ul>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link disabled" href="#" tabIndex="-1" aria-disabled="true">Disabled</a>
                        </li>
                    </ul>
                    <form className="d-flex">
                        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"></input>
                        <button className="btn btn-outline-success" type="submit">Search</button>
                    </form>
                </div>
            </div>
        </nav>
    )
}

const Carousel = () => {
    return (
        <div className="container">
            <div className="row">
                <div id="carouselExampleControls" className="carousel slide" data-bs-ride="carousel">
                    <div className="carousel-inner">

                        <div className="carousel-item active">
                            <img src={banner} className="d-block w-100" alt="..."></img>
                        </div>
                    </div>
                    <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls"
                        data-bs-slide="prev">
                        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Previous</span>
                    </button>
                    <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls"
                        data-bs-slide="next">
                        <span className="carousel-control-next-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Next</span>
                    </button>
                </div>
            </div>
        </div>
    )
}

const RestaurantCard = (props) => {

    const { cloudinaryImageId, name, costForTwo, cuisines, avgRating, locality } = props.restaurants;

    return (
        <div className="card gap-5 mt-5" style={cardStyle} >
            <img src={ "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/"+ cloudinaryImageId } className="card-img-top" alt="..."></img>
            <div className="card-body">
                <h5 className="card-title">{name}</h5>
                <p className="card-text">{costForTwo}</p>
            </div>
            <ul className="list-group list-group-flush">
                <li className="list-group-item">{cuisines.join(', ')}</li>
                <li className="list-group-item">{avgRating}</li>
                <li className="list-group-item">{locality}</li>
            </ul>
            <div className="card-body">
                <a href="#" className="btn btn-primary">Add to cart</a>
            </div>
        </div>
    )
}


const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<App />);