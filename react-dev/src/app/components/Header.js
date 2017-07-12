
import React, { Component } from 'react';
import {Navbar, Nav, NavItem} from 'react-bootstrap';
import { Link, browserHistory } from 'react-router';

import styled from 'styled-components';

class Header extends Component {
    render() {
        return (
            <Navbar inverse collapseOnSelect>
                <Navbar.Header>
                    <Navbar.Brand>
                        <Link to="/" href="/" id="logo-link">
                            <img id="navbar-logo" src="img/logo.png" />
                        </Link>
                    </Navbar.Brand>
                    <Navbar.Toggle id="burger-btn"/>
                </Navbar.Header>

                <Navbar.Collapse id="menu-items-container">
                    <Nav pullRight id="menu-items">
                        <NavItem key={1} href="/" onClick={() => browserHistory.push("/")}>
                            Analyse
                        </NavItem>
                        <NavItem key={2} href="/about" onClick={() => browserHistory.push("/about")}>
                            About
                        </NavItem>
                        <NavItem key={3} href="/contact" onClick={() => browserHistory.push("/contact")}>
                            Contact
                        </NavItem>
                        <NavItem key={4} href="/impressum"  onClick={() => browserHistory.push("/impressum")}>
                            Impressum
                        </NavItem>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        );
    }
}

export default Header;
