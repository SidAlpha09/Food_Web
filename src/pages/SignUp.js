import React, { useState } from "react";
import { Link } from "react-router-dom";

const SignUp = () => {
  const [cred, setcred] = useState({
    name: "",
    email: "",
    password: "",
    geolocation: "",
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    // fetch("end point url","post data since the url is post one")
    const response = await fetch("http://localhost:5000/api/createuser", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: cred.name,
        email: cred.email,
        password: cred.password,
        location: cred.geolocation,
      }),
    });
    const json=await response.json()
    console.log(json)

    if(!json.success){
        alert("Enter Valid Credentials")
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
            <label htmlFor="exampleInputEmail1">Name</label>
            <input
              type="text"
              className="form-control"
              placeholder="Enter your username"
              name="name"
              value={cred.name}
              onChange={onChange}
            />
          </div>
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

          <div className="form-group mt-3">
            <label htmlFor="exampleInputPassword1">Location</label>
            <input
              type="text"
              className="form-control"
              id="exampleInputPassword1"
              placeholder="Password"
              name="geolocation"
              value={cred.geolocation}
              onChange={onChange}
            />
          </div>

          <button type="submit" className="btn btn-success m-3">
            Submit
          </button>
          <Link to="/login" className="m-3 btn btn-danger">
            Already a user?
          </Link>
        </form>
      </div>
    </>
  );
};

export default SignUp;
