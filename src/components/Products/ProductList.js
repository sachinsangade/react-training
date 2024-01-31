import React, { useEffect, useState } from "react";
import ProductCard, { PromotedProduct } from "./ProductCard";
import { Link } from "react-router-dom";
import { CRAD_STYLE } from "../../utils/constants";
import productData from '../../utils/mock_data';

const ProductList = () => {
  // USE STATE
  const [products, setProducts] = useState([]);

  const [filteredProducts, setFilteredProducts] = useState([]);

  const [categories, setCategories] = useState([]);

  const [searchText, setSearchText] = useState("");

  // USE EFFECT
  useEffect(() => {

    // This is where we will make our API call.
    fetchData();

  }, []);

  const fetchData = async () => {
    // const data = await fetch("https://dummyjson.com/products");

    // const jsonData = await data.json();

    setProducts(productData.products);
    
    // console.log(products)

    productData.products.map((product) => {
      categories.push(product.category);
    });

    //console.log(categories);

    setCategories([...new Set(categories)]);
  };

  const filterProducts = (category) => {
    const newProducts = products.filter((product) => {
      if (category === product.category) {
        return product;
      }
    });
    setFilteredProducts(newProducts);
  };

  const PromotedProductCard = PromotedProduct(ProductCard)

  return (
    <>
      <div className="row mt-5">
        <div className="col-8">
          <h3>Filter Products</h3>
          <div
            className="btn-group"
            role="group"
            aria-label="Basic outlined example"
          >
            {categories.map((category, index) => (
              <button
                key={index}
                type="button"
                className="btn btn-primary"
                onClick={(e) => {
                  e.preventDefault();
                  filterProducts(category);
                }}
              >
                {category.toUpperCase()}
              </button>
            ))}

            <button
              type="button"
              className="btn btn-danger"
              onClick={(e) => {
                e.preventDefault();
                setProducts(products);
                setFilteredProducts([]);
              }}
            >
              Clear filter
            </button>
          </div>
        </div>

        <div className="col-4">
          <form>
            <div className="col-auto">
              <input
                type="text"
                className="form-control"
                value={searchText}
                onChange={(e) => {
                  setSearchText(e.target.value);
                }}
              ></input>
            </div>

            <div className="col-auto">
              <button
                className="btn btn-primary mb-3"
                onClick={(e) => {
                  e.preventDefault();
                  const matchedProducts = products.filter((product) =>
                    product.title
                      .toLowerCase()
                      .includes(searchText.toLowerCase())
                  );

                  setProducts(matchedProducts);
                }}
              >
                Search
              </button>
            </div>
          </form>
        </div>
      </div>

      {filteredProducts.length > 1 &&
        filteredProducts.map((product, index) => (
          <Link
            className="card mt-5"
            style={CRAD_STYLE}
            to={"/productDetails/" + product.id}
          >
            <ProductCard key={index} product={product} />
          </Link>
        ))}

      {filteredProducts.length === 0 &&
        products.map((product, index) => (
          <Link
            className="card mt-5"
            style={CRAD_STYLE}
            to={"/productDetails/" + product.id}
          >
            { product.promoted ? <PromotedProductCard key={index} product={product} /> : <ProductCard key={index} product={product} /> }
            
          </Link>
        ))}
    </>
  );
};

export default ProductList;
