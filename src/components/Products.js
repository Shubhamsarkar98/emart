import React from "react";
import { Link } from "react-router-dom";
import { add } from "../features/cartSlice";
import { useDispatch } from "react-redux";

const Products = (props) => {



  const { pro } = props;

const dispatch=useDispatch()

const handlecilck=(e,pro)=>{
  dispatch(add(pro))
  e.preventDefault()
}
  return (
    <Link
      to={`/product/${pro.id}`}
      style={{ textDecoration: "none", color: "black" }}
    >
      <div>
        <div className="card" style={{ width: "18rem" }} key={pro.id}>
          <img src={pro.image} className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">{pro.title}</h5>
            <p className="card-text">{pro.description}</p>
            <h5 className="card-title">${pro.price}</h5>
            <button  className="btn btn-primary" onClick={(e)=>handlecilck(e,pro)}>
              Add to cart
            </button>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default Products;
