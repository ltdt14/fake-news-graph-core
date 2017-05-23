import React, {Component, PropTypes} from 'react';
import {connect} from "react-redux";
import Helmet from "react-helmet";


class Impressum extends Component{
    render(){
        return (
            <div>
                <Helmet title={'Fake News Graph | Impressum'} />
                <h1>Impressum</h1>
            </div>
        );
    }
}

function mapStateToProps(state){

}

export default connect(mapStateToProps)(Impressum);