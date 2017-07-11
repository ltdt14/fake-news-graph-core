import React, { Component } from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';
import { fetchKeywordResults, setBreadcrumbState } from '../actions/index';
import { Link, browserHistory } from 'react-router';

class Results extends Component {
    static needs = [setBreadcrumbState, fetchKeywordResults];

    componentWillMount() {
        this.props.setBreadcrumbState(2);
        this.props.fetchKeywordResults();
    }

    renderResults(data) {
        return (
            <tr
                key={data.id}
                onClick={() => browserHistory.push('/analysis?id=' + data.id)}>
                <td>
                    {data.title}
                </td>
                <td>
                    {data.type}
                </td>
                <td>
                    {data.fakeState}
                </td>
            </tr>
        );
    }

    render() {
        return (
            <div>
                <h1>Results</h1>
                <table className="table table-striped table-hover">
                    <thead>
                        <tr>
                            <th>Titel</th>
                            <th>Typ</th>
                            <th>Fake?</th>
                        </tr>
                    </thead>
                    <tbody id="tablebody">
                        {this.props.results.map(this.renderResults)}
                    </tbody>
                </table>
            </div>
        );
    }
}

function mapStateToProps(state) {
    console.log('curr state in component:', state);

    return {
        results: state.keywordResults.results
    };
}

export default connect(mapStateToProps, {
    fetchKeywordResults,
    setBreadcrumbState
})(Results);
