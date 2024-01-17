import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom/client";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.esm";
import Navbar from "./src/components/Navbar";
import ProductCard from "./src/components/ProductCard";
import Carousel from "./src/components/Carousel";
// import restaurants from "./src/utils/mock_data";

const App = () => {

    // USE STATE
    const [products, setProducts] = useState([]);

    const [categories, setCategories] = useState([]);

    // USE EFFECT
    useEffect(() => {

        fetchData();

    }, [])

    const fetchData = async () => {

        const data = await fetch("https://dummyjson.com/products");

        const jsonData = await data.json();

        setProducts(jsonData.products);

        jsonData.products.map((product) => {
            categories.push(product.category);
        })

        setCategories([...new Set(categories)]);
    }

    const filterProducts = (category) => {
        const newProducts = products.filter( (product) => { 
            if(category === product.category){
                return product;
            }
        });
        setProducts(newProducts);
    }

    return (

        <div className="container-fluid">
            <div className="row">
                <Navbar />

                <Carousel />

                {/* <a href="#" className="btn btn-primary mt-5" onClick={ (e) => {
                    e.preventDefault();
                    const filteredRestaurants = restaurants.filter(
                        (res) => res.avgRating > 4.5 
                    )

                   // console.log(filteredRestaurants)

                    setRestaurantData(filteredRestaurants);

                } }>Filter Restaurants</a> */}
                <div className="row mt-5">
                    <div className="col-8">
                        <h3>Filter Products</h3>
                        <div className="btn-group" role="group" aria-label="Basic outlined example">

                            {categories.map((category, index) => (
                                <button key={index} type="button" className="btn btn-primary" onClick={ (e)=>{e.preventDefault(); filterProducts(category)} }>{ category.toUpperCase() }</button>
                            ))}

                            <button type="button" className="btn btn-danger" onClick={(e)=>{e.preventDefault();fetchData()}} >Clear filter</button>

                        </div>
                    </div>
                </div>
                {products.map((product, index) => (
                    <ProductCard key={index} product={product} />
                ))}

            </div>
        </div>

    )
}


const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<App />);