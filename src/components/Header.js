import React, { Component } from 'react'
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
} from 'reactstrap';
import Images from '../assets/images';
import { HeaderDropdown } from '.';

class Header extends Component {

  state = {
    isOpen: false,
    dropdownOpen: false
  };

  toggleDropdown = () => {
    this.setState({
      isOpen: !this.state.isOpen,
      dropdownOpen: !this.state.dropdownOpen
    });
  }

  render() {
    const {
      toggleDropdown,
      state: { isOpen },
    } = this;

    return (
      <div style={{ fontFamily: 'Montserrat' }}>
        <Navbar style={{ paddingLeft: '0.5rem', paddingRight: '0.5rem', paddingTop: 0, paddingBottom: 0 }} light expand="md">
          <NavbarBrand className="brand" href="/">
          <div style={{ display: 'flex', flexDirection: 'row'}}>
            <img alt="logo" src={Images.logo} className="logo" />
            <p className="brands">PHIDEL SCHOOLS</p>
          </div>
          </NavbarBrand>
          <NavbarToggler onClick={toggleDropdown} />
          <Collapse isOpen={isOpen} navbar>
            <Nav className="ml-auto" navbar>
              <HeaderDropdown headerItemName="About us" />
              <HeaderDropdown headerItemName="Academics" />
              <HeaderDropdown headerItemName="School Life" />
              <HeaderDropdown headerItemName="News" />
              <HeaderDropdown headerItemName="Calendar" />
              <HeaderDropdown headerItemName="Contact" />
            </Nav>
          </Collapse>
        </Navbar>
      </div>
    )
  }
}

export default Header;
