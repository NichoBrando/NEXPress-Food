import React, { useState } from 'react';
import ShoppingCart from '@material-ui/icons/ShoppingCart';

import {
  Navbar,
  NavbarBrand,
  Nav,
  Dropdown,
  DropdownItem,
  DropdownMenu,
  DropdownToggle
} from 'reactstrap';

import { connect } from 'react-redux';

const Header = ({ cart }) => {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);
  return (
    <div>
      <Navbar color = "dark wrapper">
        <NavbarBrand href="/" className="text-success specialElite">
          NEXPress Food
        </NavbarBrand>
        <Nav className="px-5 mr-5">
          <Dropdown isOpen={isOpen} toggle={toggle}>
            <DropdownToggle caret>
              <ShoppingCart/>{cart.length}
              </DropdownToggle>
            <DropdownMenu className="mr-5">
              {cart.map((element, index) => {
                return (
                  <React.Fragment key={index}>
                    <DropdownItem>
                      <span> {cart.filter(product => product.title === element.title).reduce((acumulator) => acumulator + 1, 0)}x</span>
                      <span> {element.title} </span>
                      <span> {(cart.filter(product => product.title === element.title).reduce((acumulator, element) => element.price + acumulator, 0)).toLocaleString('en-US', { style: 'currency', currency: 'USD' })} </span>
                    </DropdownItem>
                  </React.Fragment>
                )
              })}
            </DropdownMenu>
          </Dropdown>
        </Nav>
      </Navbar>
    </div>
  )
}
export default connect(state => ({cart: state.cart}))(Header);