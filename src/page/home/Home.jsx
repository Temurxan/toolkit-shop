import React, { useEffect } from "react";
import { connect } from "react-redux";
import { useNavigate } from "react-router-dom";
import { sliceAction } from "../../redux/slice";
import isBasket from "../../utils/isBasket";

const Home = (props) => {
  
  useEffect(()=>{
    props.loadProducts()
    props.loadBasketProducts()
  },[])
  
  return (
    <div className="d-flex gap-3 flex-wrap p-4">
      {props.products.map((item) => (
        <div className="card w-25">
          <div className="card-header">{item.category}</div>
          <div className="card-body">
            <img width={100} height={100} src={item.img} alt="" />
            {console.log(item.img)}
            <h3>{item.name}</h3>
            <h4>{item.price}</h4>
          </div>
          <div className="card-footer">
            <button disabled={isBasket(props.basket,item.id)} onClick={()=>props.addToBasket(item)} className="btn btn-success">add to cart</button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default connect((state) => state.productReducer, sliceAction)(Home);
