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
    <div className = "d-flex flex-row flex-wrap p-5">
      {selling.map((element, index) => {
        return (
          <React.Fragment key = {index}>
            <div className = "foodCard border ml-5 text-center">
              <p>{element.title}</p>
              <span>{element.price.toLocaleString('en-US', { style: 'currency', currency: 'USD' })}</span>
              <img className="d-block"/>
              <button onClick = {() => dispatch(addItem(selling, element))}>-</button>
              <span>{cart.filter(product => product.title === element.title).reduce((acumulator, currentValue) => acumulator + 1, 0)}</span>
              <button onClick = {() => dispatch(addItem(selling, element))}>+</button>
            </div>
          </React.Fragment>
        )
      })}
  </div>
  );
}
export default connect(state => ({selling: state.selling, cart: state.cart}))(ShopItems);