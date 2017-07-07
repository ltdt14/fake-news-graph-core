import React, {Component} from "react";
import styled from 'styled-components';

class MyComponent extends Component {

    componentWillMount() {
        const script = document.createElement("script");

        script.src = "js/wordcloud.js";
        script.async = true;

        document.body.appendChild(script);
    }

    render() {
        return (
            <div>
                <div className="side-pad" id="wordcloud-container">
                    <svg id='wordcloud'></svg>
                </div>
            </div>
        )
    }

}

export default MyComponent;