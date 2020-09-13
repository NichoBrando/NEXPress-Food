import { createStore } from 'redux';

const initial_state = {
  cart: [],
  selling: []
}

function reducer(state = initial_state, action){
  if(action.type == "newItem"){
    return {...state, selling: action.items};
  }
  if(action.type == "ADD"){
    return { ...state, cart: [...state.cart, action.item ] };
  }
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