import React from 'react';
import { connect } from 'react-redux';

const addItem = (selling, item) => {
  return {
    type: "ADD",
    selling,
    item
  }
}

const ShopItems = ({selling, cart, dispatch}) => {
  return (
    <div className = "d-flex flex-row flex-wrap p-3">
      {selling.map((element, index) => {
        return (
          <React.Fragment key = {index}>
            <div className = "foodCard border rounded border-info bg-success p-2 ml-5 my-2 text-center shadow">
              <p>{element.title}</p>
              <img className={`foodImage d-block ${element.photo}`}/>
              <span className="d-block">{element.price.toLocaleString('en-US', { style: 'currency', currency: 'USD' })}</span>
              <button onClick = {() => dispatch(addItem(selling, element))} className = "btn btn-secondary p-1 rounded">-</button>
              <span className="m-3">{cart.filter(product => product.title === element.title).reduce((acumulator, currentValue) => acumulator + 1, 0)}</span>
              <button onClick = {() => dispatch(addItem(selling, element))} className = "btn btn-secondary p-1 rounded">+</button>
            </div>
          </React.Fragment>
        )
      })}
  </div>
  );
}
export default connect(state => ({selling: state.selling, cart: state.cart}))(ShopItems);