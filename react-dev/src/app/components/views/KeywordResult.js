import React, { Component } from 'react';

import Header from '../Header';
import Navbar1 from '../Navbar1';
import Breadcrumb from '../../container/Breadcrumb';
import Results from '../../container/Results';
import ArticleSelection from '../../container/ArticleSelection';
import Footer from '../Footer';

class ResultView extends Component {
    render() {
        return (
            <div>
                <Navbar1 />
                <Breadcrumb />
                <ArticleSelection />
                <Footer />
            </div>
        );
    }
}

export default ResultView;