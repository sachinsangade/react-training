import React, { Suspense, lazy, useEffect, useState } from "react";
import ReactDOM from "react-dom/client";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.esm";
import Navbar from "./src/components/Navbar";
import Body from "./src/components/Body";
import About from "./src/components/About/About";
import Contact from "./src/components/Contact";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import ProductDetails from "./src/components/Products/ProductDetails";
import Error from "./src/components/Error";
import Skeleton from "react-loading-skeleton";
import 'react-loading-skeleton/dist/skeleton.css';
import userContext from "./src/utils/UserContext";
import appStore from "./src/utils/appStore";
import { Provider } from "react-redux";
import Cart from "./src/components/Cart";

// Lazy loading - using Lazy and Suspense.
const ProductCategory = lazy( () => import('./src/components/Products/ProductCategory') )

// App Component.
const App = () => {

  // for useContext
  const [ userInfo, setUserInfo ] = useState("");

  useEffect( () => {
    // API call to authenticate user
    const userData = {
      name: 'John Doe'
    }

    setUserInfo(userData)

  }, [] )

  return (
    <Provider store={ appStore } >
      <userContext.Provider value={{loggedInUser: userInfo.name}} >
        <div className="container-fluid">
          <div className="row">
            <Navbar />
            <Outlet />
          </div>
        </div>
      </userContext.Provider>
    </Provider>
  );
};

// React Router.
const AppRouter = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Body />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/productDetails/:productId",
        element: <ProductDetails />,
      },
      {
        path: '/ProductCategory',
        // Wrap the lazy loaded component using suspense.
        element: <Suspense fallback={<Skeleton count={5} />} >< ProductCategory /></Suspense>,
      },
      {
        path: '/cart',
        element: <Cart />
      }
    ],
    errorElement: <Error />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<RouterProvider router={AppRouter} />);
