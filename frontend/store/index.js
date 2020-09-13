import { createStore } from 'redux';

const initial_state = {
  cart: [],
  selling: [
    {title: "Hot Dog", price: 5.49, photo: 'hotdog'},
    {title: "Hamburger", price: 5.00, photo: 'hamburguer'},
    {title: "Pizza Mozzarella", price: 20.99, photo: 'pizza-mozzarella'},
    {title: "Random Pizza", price: 20.99, photo: 'random'},
    {title: "Pizza Margheritta", price: 20.99, photo: 'pizza-margheritta'},
  ]
}

function reducer(state = initial_state, action){
  console.log(1)
  if(action.type == "ADD"){
    console.log(state.cart)
    return { ...state, cart: [...state.cart, action.item] }
  }
  return state;
}

const store = createStore(reducer);

export default store;