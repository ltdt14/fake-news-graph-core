import React, {Component} from "react";
import styled from 'styled-components';
import {connect} from 'react-redux';
import {setBreadcrumbState} from "../actions/index";

class Wordcloud extends Component {

    componentWillMount() {

        const script = document.createElement("script");

        script.src = "js/wordcloud.js";
        script.async = true;

        document.body.appendChild(script);
        this.props.setBreadcrumbState(2);
    }

    render() {
        return (
            <div>
                <div className="side-pad" id="wordcloud-container">
                    <svg id='wordcloud'/>
                </div>
                <button onClick={() => this.props.setBreadcrumbState(3)}>Next Step</button>
            </div>
        )
    }
}

export default connect(null, {setBreadcrumbState})(Wordcloud);

