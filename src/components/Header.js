import React, { Component } from "react";
import { Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem } from "reactstrap";
import Images from "../assets/images";
import { HeaderDropdown } from ".";
import { Link } from "react-router-dom";
import { Facebook } from '.';
import { Button, Row, Col } from 'reactstrap';

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
  };

  render() {
    const {
      toggleDropdown,
      state: { isOpen }
    } = this;

    return (
      <div style={{ fontFamily: "Montserrat" }}>
        <Navbar
          style={{
            paddingLeft: "0.5rem",
            paddingRight: "0.5rem",
            paddingTop: 0,
            paddingBottom: 0
          }}
          light
          expand="md"
        >
          <NavbarBrand className="brand" href="/">
            <div style={{ display: "flex", flexDirection: "row" }}>
              <img alt="logo" src={Images.logo} className="logo" />
              <p className="brands">PHIDEL SCHOOLS</p>
            </div>
          </NavbarBrand>
          <NavbarToggler onClick={toggleDropdown} />
          <Collapse isOpen={isOpen} navbar>
            <Nav className="ml-auto" navbar>
              <HeaderDropdown headerItemName="Academics" />
              <NavItem style ={{marginRight: "20px"}}>
                <Link className="nav-link" style={{ color: 'black', fontSize: '14px' }} to="/gallery">Our Gallery</Link>
              </NavItem>
              <HeaderDropdown headerItemName="News" />
              <HeaderDropdown headerItemName="Calendar" />
              <NavItem style ={{marginRight: "20px"}}>
              <a href="#contact-us" style={{ color: 'black', fontSize: '14px' }}className="nav-link">Contact us</a>
              </NavItem>
            </Nav>
          </Collapse>
        </Navbar>
        <div className="styledhr"></div>
        <div className="pad-button">
          <Row className="d-flex justify-content-end">
            <Col xs="7" md="4" lg="3">
              <Button style={{ backgroundColor: "#415796", width: '100%', paddingRight: '2px' }}>
                <p className="iconText">Visit us on facebook<Facebook icon="facebook" /></p>
              </Button>
            </Col>
            <Col xs="5" md="3" lg="2">
              <Button color="success" style={{ width: '100%' }}>
                <p className="iconText"> Go to Portal</p>
              </Button>
            </Col>
          </Row>
        </div>
      </div>
    );
  }
}

export default Header;
