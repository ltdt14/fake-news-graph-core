import React, {Component} from "react";
import {Link} from "react-router";
import ScrollableAnchor, {configureAnchors} from 'react-scrollable-anchor';

import Header from './Header';
import Wordcloud from './Wordcloud';
import Footer from './Footer';

configureAnchors({offset: -60, scrollDuration: 200});

class Home extends Component {
    componentWillMount() {
        configureAnchors({})
    }

    render() {
        return (
            <div>
                <Header/>
                <Wordcloud/>

                <Footer/>
            </div>
        );
    }
}

export default Home;