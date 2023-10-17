import React from "react";
import { connect } from "react-redux";
import { orderAction } from "../../../redux/sliceOrder";
import sum from "../../../utils/sum";

const Order = (props) => {
  return (
    <div className="p-3 d-flex gap-3">
      {props.orders.map((item) => (
        <div className="card border-dark w-25">
          <div className="card-header bg-dark">
            <h3 className="text-white">{item.userName}</h3>
          </div>
          <div className="card-body">
            {item.order.map((pr) => (
              <ul>
                <li>
                  <img src={pr.img} width={60} height={60} alt="" />
                </li>
                <li>
                  Product name: <span className="text-primary">{pr.name}</span>
                </li>
                <li>
                  Price: <span className="text-primary">{pr.price}</span>
                </li>
                <li>
                  Category: <span className="text-primary">{pr.category}</span>
                </li>
                <li>
                  Count: <span className="text-primary">{pr.count}</span>
                </li>
                <hr />
              </ul>
            ))}
          </div>
          <div className="card-footer bg-dark">
            <h2 className="text-white">Total : {sum(item.order)}</h2>
          </div>
        </div>
      ))}
    </div>
  );
};

export default connect((state) => state.orderReducer, orderAction)(Order);
