import React, {Component} from "react";
import {connect} from 'react-redux';
import {setBreadcrumbState} from "../actions/index";

class Analysis extends Component {
    static needs = [
        setBreadcrumbState
    ];

    componentWillMount() {
        this.props.setBreadcrumbState(3);
    }

    render() {
        return (
            <div>
                <h1>Analysis</h1>
            </div>
        )
    }
}

export default connect(null, {setBreadcrumbState})(Analysis);

