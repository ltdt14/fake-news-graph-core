import React, { Component } from 'react';
import styled from 'styled-components';

import { Link } from 'react-router';

import Header from '../Header';
import Navbar1 from '../Navbar1';
import Footer from '../Footer';

class About extends Component {
    render() {
        return (
            <div>
                <Navbar1 />
                <h1>About</h1>
                <Footer />
            </div>
        );
    }
}

export default About;
