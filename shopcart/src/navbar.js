import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import DisplayProducts from "./displayProducts";
import Cart from "./cart";
import SignIn from "./signin";

function Navbar(props) {
  const totalValue = props.products
    .map((product) => product.value)
    .reduce((total, value) => total + value, 0);

  return (
    <Router>
      <div className="site-header d-flex justify-content-between align-items-center px-4">
        <Link to="/" className="site-name-link">
          <h1 className="site-name m-0">{props.siteName}</h1>
        </Link>
        <Link to="/cart" className="cart-total">
          <FontAwesomeIcon icon={faShoppingCart} className="mr-3" />
          {totalValue} items
        </Link>
      </div>

      <Routes>
        <Route
          path="/"
          element={
            <DisplayProducts
              products={props.products}
              onIncrement={props.onIncrement}
              onDecrement={props.onDecrement}
              sortType={props.sortType}
              onSort={props.onSort}
            />
          }
        />
        <Route
          path="/cart"
          element={<Cart products={props.products} totalValue={totalValue} />}
        />
        <Route path="/signin" element={<SignIn />} />
      </Routes>
    </Router>
  );
}

export default Navbar;
