import React, { Component } from 'react';

import Header from '../Header';
import Navbar1 from '../Navbar1';
import Breadcrumb from '../../container/Breadcrumb';
import Analysis from '../../container/Analysis';
import Footer from '../Footer';

class AnalysisView extends Component {
    render() {
        return (
            <div>
                <Navbar1 />
                <Breadcrumb />
                <Analysis />
                <Footer />
            </div>
        );
    }
}

export default AnalysisView;
