import React, { useState } from "react";
import { Link,useNavigate } from "react-router-dom";
import Badge from 'react-bootstrap/Badge'
import Modal from "../Modal";
import Cart from "../pages/Cart";
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { useCart,useDispatchCart } from "./ContextReducer";
const Navbar = () => {
  const navigate=useNavigate();
  const[cartView,setCartView]=useState(false)
  let data = useCart();

  // logout funtionality on click
  const handleLogout=()=>{
    localStorage.removeItem("authToken");
    navigate("/login")
  }
  return (
    <>
      <div>
        <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
          <div className="container-fluid">
            <Link className="navbar-brand fs-3 fw-bold " to="/">
              Not For Food
            </Link>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="/navbarNav"
              aria-controls="navbarNav"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
              <ul className="navbar-nav me-auto">
                <li className="nav-item">
                  <Link className="nav-link active " aria-current="page" to="/">
                    Home
                  </Link>
                </li>
                {localStorage.getItem("authToken") ? (
                  <li className="nav-item">
                    <Link
                      className="nav-link active"
                      aria-current="page"
                      to="/"
                    >
                      My Orders
                    </Link>
                  </li>
                ) : (
                  ""
                )}
              </ul>
              {!localStorage.getItem("authToken") ? (
                <div className="d-flex">
                  <Link className="btn bg-white text-primary mx-1" to="/login">
                    Login
                  </Link>

                  <Link
                    className="btn bg-white text-primary mx-1"
                    to="/createuser"
                  >
                    Sign-Up
                  </Link>
                </div>
              ) : (
                <div>
                  <div className="btn bg-white text-primary mx-2" onClick={()=>{setCartView(true)}}>
                  <Badge pill bg="success">{data.length}
                  <ShoppingCartIcon />
                  </Badge>
                  </div>
                  {cartView? <Modal onClose={()=>{setCartView(false)}}><Cart/></Modal>:null}
                  <div className="btn bg-white text-danger mx-2" onClick={handleLogout}>Logout</div>
                </div>
              )}
            </div>
          </div>
        </nav>
      </div>
    </>
  );
};

export default Navbar;
