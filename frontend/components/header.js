import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import ShoppingCart from '@material-ui/icons/ShoppingCart';

import {
  Collapse,
  Navbar,
  NavbarBrand,
  NavbarToggler,
  Nav,
  NavItem,
  NavLink
} from 'reactstrap';

import { connect } from 'react-redux';

const Header = ({ cart }) => {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);
  return (
    <div>
      <Navbar color = "dark">
        <NavbarBrand href="/" className="text-success specialElite">
          NEXPress Food
        </NavbarBrand>
        <NavbarToggler onClick = {toggle} />
        <Nav>
          <NavItem>
            <NavLink className="text-success">About Us</NavLink>
          </NavItem>
          <NavItem>
            <NavLink className="text-success">Shop</NavLink>
          </NavItem>
          <NavItem>
            <NavLink className="text-success"><ShoppingCart/>{cart.length}</NavLink>
          </NavItem>
        </Nav>
      </Navbar>
    </div>
  )
}
export default connect(state => ({cart: state.cart}))(Header);