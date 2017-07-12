import React, { Component } from 'react';
import styled from 'styled-components';

import { Link } from 'react-router';

import Header from '../Header';
import Navbar1 from '../Navbar1';
import Footer from '../Footer';

class Contact extends Component {
    render() {
        return (
            <div>
                <Navbar1 />
                <h1>Contact</h1>
                <Footer />
            </div>
        );
    }
}

export default Contact;
