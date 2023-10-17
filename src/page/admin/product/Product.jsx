import React from "react";
import { connect } from "react-redux";
import selectimg from "../../../images/selectimg.jpg";
import { sliceAction } from "../../../redux/slice";

const Product = (props) => {

  console.log(props);
  return (
    <div className="container">
      <div className="card w-25 p-4 mx-auto">
        <label className="mb-3">
          {props.product.img ? (
            <img width={100} height={100} src={props.product.img} alt="" />
          ) : (
            <img width={100} height={100} src={selectimg} alt="" />
          )}
          <input
            onChange={(e) => props.getFile(e.target.files[0])}
            type="file"
            className="mb-3 d-none"
          />
        </label>
        <input
          onChange={(e) =>
            props.handleChange({ ...props.product, name: e.target.value })
          }
          placeholder="name"
          value={props.product.name}
          className="form-control mb-3"
          type="text"
        />
        <input
          onChange={(e) =>
            props.handleChange({ ...props.product, price: e.target.value })
          }
          value={props.product.price}
          className="form-control mb-3"
          type="number"
        />
        <select
          onChange={(e) =>
            props.handleChange({ ...props.product, category: e.target.value })
          }
          className="mb-3 form-select"
        >
          <option value="" disabled selected>
            choose
          </option>

          {props.categories.map((item) => (
            <option value={item}>{item}</option>
          ))}
        </select>

        <button onClick={props.addProduct} className="btn btn-dark">
          add product
        </button>
      </div>

      <table className="table">
        <thead>
          <tr>
            <th>img</th>
            <th>name</th>
            <th>price</th>
            <th>category</th>
          </tr>
        </thead>
        <tbody>
          {props.products.map((item) => (
            <tr>
              <td>
                <img width={100} height={100} src={item.img} alt="" />
              </td>
              <td>{item.name}</td>
              <td>{item.price}</td>
              <td>{item.category}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default connect((state) => state.productReducer, sliceAction)(Product);
