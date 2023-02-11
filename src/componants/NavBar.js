import React from 'react'
import '../NavBar.css'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import logo from '../Asets/images/logo.png';
import { HashLink } from 'react-router-hash-link';

const NavBar = () => {
  return (
    <>
    <Navbar expand="sm">
      <Container>
      <img src={logo}  alt=""/>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <HashLink to="/#Home">Home</HashLink>
            <HashLink to="/#About Us">About Us</HashLink>
            <HashLink to="/#Explore Food">Explore Food</HashLink>
            <HashLink to="/#Reviews">Reviews</HashLink>
            <HashLink to="/#Contact">Contact</HashLink>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </>
  )
}

export default NavBar