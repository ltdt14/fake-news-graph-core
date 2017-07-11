import React, { Component } from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';
import { setBreadcrumbState } from '../actions/index';

class Wordcloud extends Component {
    static needs = [setBreadcrumbState];

    componentWillMount() {
        if (typeof window !== 'undefined') {
            const script = document.createElement('script');

            script.src = 'js/wordcloud.js';
            script.async = true;

            document.body.appendChild(script);
        }

        this.props.setBreadcrumbState(1);
    }

    render() {
        return (
            <div>
                <div className="side-pad" id="wordcloud-container">
                    <svg id="wordcloud" />
                </div>
            </div>
        );
    }
}

export default connect(null, { setBreadcrumbState })(Wordcloud);
