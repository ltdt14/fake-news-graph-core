import React, {Component} from "react";
import styled from 'styled-components';
import {connect} from 'react-redux';
import {fetchKeywordResults, setBreadcrumbState} from "../actions/index";

class Results extends Component {

    componentWillMount() {
        this.props.setBreadcrumbState(2);
        this.props.fetchKeywordResults();
    }

    render() {
        return (
            <div>
                <h1>Results</h1>
                {this.props.results}
            </div>
        )
    }
}

function mapStateToProps(state) {
    console.log('curr state in component:', state);

    return {
        results: state.fetchKeywordResults.results,
    };

};
export default connect(mapStateToProps, {fetchKeywordResults, setBreadcrumbState})(Results);

