import React from "react";

const Card = (props) => {

  let options=props.options;
  let priceOptions=Object.keys(options)

  return (
    <div>
      <div
        className="card mt-3 "
        style={{ width: " 18rem", maxHeight: "360px" }}
      >
        <img
          src={props.imgSrc}
          className="card-img-top "
          alt="..."
          style={{height:'200px',objectFit:'fill'}}
        />
        <div className="card-body">
          <h5 className="card-title">{props.foodName}</h5>
          
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
              {
                priceOptions.map((data)=>{
                  return(
                    <option key={data} value={data}>{data}</option>
                  )
                })
              }
            </select>

            <div className="d-inline h-100 fs-7">Total Price</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
