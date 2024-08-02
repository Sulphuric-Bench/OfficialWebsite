import React, { Component } from 'react'
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
} from 'reactstrap';
import Logo from './Brand/Logo';
import './Header.css'

export class Header extends Component {
  state = {
    isOpen: false,
  }
  toggleNav = () => {
    this.setState({
      isOpen: !this.state.isOpen
    })
  }
  render() {
    return (
      <div className='menubar'>
        <Navbar expand="sm" className='container'>
        <NavbarBrand href="/">
          <Logo/>
        </NavbarBrand>
        <NavbarToggler onClick={this.toggleNav} style={{ color: "#54defe", backgroundColor: "#54defe"}}/>
        <Collapse isOpen={this.state.isOpen} navbar className='btn-wrap'>
          <Nav className='ms-auto' navbar>
              <NavItem className='defaultBtn'>
                <NavLink href="https://shop.sulphuricbench.com/" className='defaultBtnContent'>Visit Our Shop</NavLink>
              </NavItem>
          </Nav>
        </Collapse>
      </Navbar>
      </div>
    )
  }
}

export default (Header)