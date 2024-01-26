import React from "react";

const Card = () => {
  return (
    <div>
      <div
        className="card m-3 "
        style={{ width: " 18rem", maxHeight: "360px" }}
      >
        <img
          src="https://images.pexels.com/photos/376464/pexels-photo-376464.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          className="card-img-top"
          alt="..."
        />
        <div className="card-body">
          <h5 className="card-title">Card title</h5>
          <p className="card-text">Some product</p>
          <div className="container w-100 ">
            <select className="m-2 h-100  bg-primary rounded">
              {/* using {} will be used to write js code and {} type of line denotes a js code */}
              {/* this will be used to choose the quantity of the project---> */}
              {Array.from(Array(6), (e, i) => {
                return (
                  <option key={i + 1} value={i + 1}>
                    {i + 1}
                  </option>
                );
              })}
            </select>

            <select className="m-2 h-100  bg-primary rounded">
              <option value="Half">Half</option>
              <option value="Full">Full</option>
            </select>

            <div className="d-inline h-100 fs-7">Total Price</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
