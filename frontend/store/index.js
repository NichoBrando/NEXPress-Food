import { createStore } from 'redux';

//Storage initial state
const initial_state = {
  cart: [],
  selling: []
}

function reducer(state = initial_state, action){
  //Add item to selling foods, received from Express API.
  if(action.type == "newItem"){
    return {...state, selling: action.items};
  }
  //Add one food to cart
  if(action.type == "ADD"){
    return { ...state, cart: [...state.cart, action.item ] };
  }
  //remove one food from cart
  if(action.type == "remove"){
    let newState = {...state};
    let index = newState.cart.indexOf(action.item);
    if(index === -1){
      return { ...state, cart: state.cart };
    }
    let cartHalf = newState.cart.slice(0, index);
    let otherCartHalf = newState.cart.slice(index + 1);
    let newCart = cartHalf.concat(otherCartHalf);
    console.log(cartHalf);
    return {...state, cart: newCart };
  }
  return state;
}

const store = createStore(reducer);

export default store;