import React, {Component} from "react";
import {connect} from "react-redux";

import H1 from '../styled/H1';


class NotFound extends Component{
    render(){
        return(
            <div>
                <H1>404 - Requested Page not found</H1>
            </div>
        );
    }
}

function mapStateToProps(state){

}

export default connect(mapStateToProps)(NotFound);