import React, { useEffect } from "react";
import { connect } from "react-redux";
import { sliceAction } from "../../redux/slice";
import { orderAction } from "../../redux/sliceOrder";
import sum from "../../utils/sum";

const Basket = (props) => {
  useEffect(() => {
    props.loadBasketProducts();
  }, []);

  return (
    <>
      <div className="d-flex gap-3 flex-wrap p-4">
        {props.basket.map((item) => (
          <div key={item.id} className="card w-25">
            <div className="card-header">{item.category}</div>
            <div className="card-body">
              <img width={100} height={100} src={item.img} alt="" />
              <h3>{item.name}</h3>
              <h4>{item.price}</h4>
            </div>
            <div className="card-footer d-flex align-items-center gap-3">
              <button
                onClick={() => props.basketPlus(item.id)}
                className="btn btn-sm btn-dark"
              >
                +
              </button>
              <h3>{item.count}</h3>
              <button
                onClick={() => props.basketMinus(item.id)}
                className="btn btn-sm btn-dark"
              >
                -
              </button>
            </div>
          </div>
        ))}
      </div>
      <div className="d-flex gap-3 align-items-center">
        <h1>Total: {sum(props.basket)}</h1>
        <button
          onClick={() => props.addOrder(props.basket)}
          style={{ width: "180px" }}
          className="btn btn-dark"
        >
          Order
        </button>
      </div>
    </>
  );
};

export default connect((state) => state.productReducer, {
  ...sliceAction,
  ...orderAction
})(Basket);
