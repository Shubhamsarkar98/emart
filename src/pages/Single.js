import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { add } from "../features/cartSlice";
import { useDispatch } from "react-redux";

import axios from "axios";
const Single = () => {
  const [data, setdata] = useState([]);
  const dispatch=useDispatch()
  const navi = useNavigate();

  const prams = useParams();
  console.log(prams);

  useEffect(() => {
    axios.get(`https://fakestoreapi.com/products/${prams.id}`).then((res) => {
      setdata(res.data);
    });
  }, [prams.id]);
  console.log(data);
 const handlecilck=(pro)=>{
   dispatch(add(pro))
 }
  
  return (
    <div className="container mx-auto mt-12">
      <button className="btn btn-primary  my-4" onClick={() => navi("/product")}>
        back
      </button>
      <div className="card" style={{ width: "18rem" }}>
        <img src={data.image} className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title">{data.title}</h5>
          <p className="card-text">{data.description}</p>
          <h5 className="card-title">{data.price}</h5>
          <button className="btn btn-primary" onClick={(e)=>handlecilck(data)}>Add to cart</button>
        </div>
      </div>
    </div>
  );
};

export default Single;
