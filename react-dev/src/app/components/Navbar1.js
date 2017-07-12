
import React, { Component } from 'react';
import {Navbar, Nav, NavItem} from 'react-bootstrap';
import { Link } from 'react-router';

import styled from 'styled-components';

class Navbar1 extends Component {
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
                        <NavItem key={1} href="/" onClick={e => this.props.history.push("/")}>
                            Analyse
                        </NavItem>
                        <NavItem key={2} href="/about" onClick={e => this.props.history.push("/about")}>
                            About
                        </NavItem>
                        <NavItem key={3} href="/contact" onClick={e => this.props.history.push("/contact")}>
                            Contact
                        </NavItem>
                        <NavItem key={4} href="/impressum"  onClick={e => this.props.history.push("/impressum")}>
                            Impressum
                        </NavItem>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        );
    }
}

export default Navbar1;
