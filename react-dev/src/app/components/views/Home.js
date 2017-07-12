import React, { Component } from 'react';

import Header from '../Header';
import Navbar1 from '../Navbar1';
import Breadcrumb from '../../container/Breadcrumb';
import Wordcloud from '../../container/Wordcloud';
import Footer from '../Footer';

class Home extends Component {
    render() {
        return (
            <div>
                <Navbar1 />
                <Breadcrumb />
                <Wordcloud />
                <Footer />
            </div>
        );
    }
}

export default Home;
