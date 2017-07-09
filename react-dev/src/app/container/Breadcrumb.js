import React, {Component} from "react";
import styled from 'styled-components';
import {connect} from 'react-redux';
import {setBreadcrumbState} from "../actions/index";


class Breadcrumb extends Component {
    static needs = [
        setBreadcrumbState
    ];

    /*
    highlightProgressStep() {
        //clean the class names of all elems
        let otherElems = document.getElementsByClassName('progress-step');

        [].forEach.call(otherElems, function (elem) {
            elem.className = 'side-pad col-lg-4 col-md-4 col-sm-4 col-xs-6 progress-step';
        });

        //add class to curr elem
        let currElem = document.getElementById('step-' + this.props.progressStep);
        currElem.className += ' current-step';
    }*/


    render() {
        return (
            <div id="progress-bar">
                <div className="row" id="progress-steps">

                    <div className="side-pad col-lg-4 col-md-4 col-sm-4 col-xs-6 progress-step" id="step-1">
                        <table>
                            <tr>
                                <td>
                                    <div className="enumeration">1</div>
                                </td>
                                <td>Search</td>
                            </tr>
                        </table>
                    </div>

                    <div className="side-pad col-lg-4 col-md-4 col-sm-4 col-xs-6 progress-step" id="step-2">
                        <table>
                            <tr>
                                <td>
                                    <div className="enumeration">2</div>
                                </td>
                                <td>Select</td>
                            </tr>
                        </table>
                    </div>

                    <div className="side-pad col-lg-4 col-md-4 col-sm-4 col-xs-12 progress-step" id="step-3">
                        <table>
                            <tr>
                                <td>
                                    <div className="enumeration">3</div>
                                </td>
                                <td>Visualize</td>
                            </tr>
                        </table>
                    </div>

                </div>
                <div className="side-pad" id="progress-tips">
                    {this.props.progressTip}

                </div>
            </div>
        )
    }

}

function mapStateToProps(state) {
    console.log('curr state in component:', state);
    return {
        progressStep: state.setBreadcrumbState.progressStep,
        progressTip: state.setBreadcrumbState.progressTip
    };

};

export default connect(mapStateToProps, {setBreadcrumbState})(Breadcrumb);