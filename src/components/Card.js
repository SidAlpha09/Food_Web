import React, { useEffect, useRef, useState } from "react";
import { useDispatchCart, useCart } from "./ContextReducer";

const Card = (props) => {
  let dispatch = useDispatchCart();
  let data=useCart()
  let options = props.options;
  let priceOptions = Object.keys(options);
  const [qty, setQty] = useState(1);
  const [size, setSize] = useState("");
  let priceRef=useRef()

  const handleAddToCart = async () => {
    let food = []
    for (const item of data) {
      if (item.id === props.foodItem._id) {
        food = item;

        break;
      }
    }
    if (food.length!==0) {
      if (food.size === size) {
        await dispatch({ type: "UPDATE", id: props.foodItem._id, price: finalPrice, qty: qty })
        return
      }
      else if (food.size !== size) {
        await dispatch({ type: "ADD", id: props.foodItem._id, name: props.foodItem.name, price: finalPrice, qty: qty, size: size,img: props.ImgSrc })
        console.log("Size different so simply ADD one more to the list")
        return
      }
      return
    }


    await dispatch({
      type: "ADD",
      id: props.foodItem._id,
      name: props.foodItem.name,
      price: finalPrice,
      qty: qty,
      size: size
    });
    
  };

  let finalPrice=qty*parseInt(options[size])
  useEffect(()=>{
    setSize(priceRef.current.value)
  })
  return (
    <div>
      <div
        className="card mt-3 "
        style={{ width: " 18rem", maxHeight: "360px" }}
      >
        <img
          src={props.foodItem.img}
          className="card-img-top "
          alt="..."
          style={{ height: "200px", objectFit: "fill" }}
        />
        <div className="card-body">
          <h5 className="card-title">{props.foodItem.name}</h5>

          <div className="container w-100 ">
            <select className="m-2 h-100  bg-primary rounded" onChange={(e)=>{
              setQty(e.target.value)
            }}>
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

            <select className="m-1 h-100  bg-primary rounded" ref={priceRef} onChange={(e)=>{
              setSize(e.target.value)
            }}>
              {priceOptions.map((data) => {
                return (
                  <option key={data} value={data}>
                    {data}
                  </option>
                );
              })}
            </select>

            <div className="d-inline h-100 fs-7">Rs.{finalPrice}/-</div>
          </div>

          <button
            className="btn btn-primary justify-center"
            onClick={handleAddToCart}
          >
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default Card;
