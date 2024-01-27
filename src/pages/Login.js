import React, { useState } from "react";
// import Navbar from "../components/Navbar";
// import { Footer } from "../components/Footer";
import { Link, useNavigate } from "react-router-dom";

const Login = () => {
  let navigate=useNavigate()
  const [cred, setcred] = useState({
    email: "",
    password: "",
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    // fetch("end point url","post data since the url is post one")
    const response = await fetch("http://localhost:5000/api/loginuser", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: cred.email,
        password: cred.password,
      }),
    });
    const json = await response.json();
    console.log(json);

    if (!json.success) {
      alert("Enter Valid Credentials");
    }
    if (json.success) {
      //using local storage to store the authtoken is the jwt token in the local machine
      localStorage.setItem("authToken",json.authToken)
      console.log(localStorage.getItem("authToken"))
      navigate('/');
    }
  };

  const onChange = (event) => {
    setcred({ ...cred, [event.target.name]: event.target.value });
  };
  return (
    <>
      <div className="container bg-primary p-3 rounded mt-5">
        <form onSubmit={handleSubmit}>
          
          <div className="form-group mt-3">
            <label htmlFor="exampleInputEmail1">Email address</label>
            <input
              type="email"
              className="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
              placeholder="Enter email"
              name="email"
              value={cred.email}
              onChange={onChange}
            />
            <small id="emailHelp" className="form-text text-muted ">
              We'll never share your email with anyone else.
            </small>
          </div>


          <div className="form-group mt-3">
            <label htmlFor="exampleInputPassword1">Password</label>
            <input
              type="password"
              className="form-control"
              id="exampleInputPassword1"
              placeholder="Password"
              name="password"
              value={cred.password}
              onChange={onChange}
            />
          </div>

          

          <button type="submit" className="btn btn-success m-3">
            Submit
          </button>
          <Link to="/createuser" className="btn btn-danger">
            Sign Up
          </Link>
        </form>
      </div>
    </>
  );
};

export default Login;
