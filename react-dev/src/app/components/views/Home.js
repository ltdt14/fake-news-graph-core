import React, {Component} from "react";

import Header from '../Header';
import Breadcrumb from '../../container/Breadcrumb';
import Wordcloud from '../../container/Wordcloud';
import Footer from '../Footer';

class Home extends Component {
    render() {
        return (
            <div>
                <Header/>
                <Breadcrumb/>
                <Wordcloud/>
                <Footer/>
            </div>
        );
    }
}

export default Home;