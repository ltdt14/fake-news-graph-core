import React, {Component} from "react";
import styled from 'styled-components';

import {Link} from "react-router";


import Header from './Header';

class Impressum extends Component {
    render() {
        return (
            <div>
                <Header/>
                <h1>Impressum</h1>
                <Link to="/">Back</Link>
            </div>
        )
    }

}

export default Impressum;