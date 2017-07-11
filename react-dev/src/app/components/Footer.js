import React, { Component } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router';

const FooterWrapper = styled.footer`
    background-color: #111111;
    box-shadow: 0 0 35px 6px rgba(0, 0, 0, 0.6);
    padding-top: 20px;
    padding-bottom: 20px;
    margin-bottom: 0;

    p {
        font-size: 15px;
        text-align: center;
        color: #eeeeee;

        @media screen and (max-width: ${props => props.theme.screenXxsMax}) {
            font-size: 12px;
        }
    }
`;

class Footer extends Component {
    render() {
        return (
            <footer>
                <div className="row" id="pre-footer">
                    <div
                        className="col-lg-6 col-md-6 col-sm-6 col-xs-12 side-pad"
                        id="footer-about">
                        <h2> About </h2>

                        <p>
                            {' '}We are a group of students developing an web
                            platform for analysis and visualisation of the fake
                            news spreading through social networks. Our fist
                            milestone is visualising the spread of fake news
                            stories in Twitter.
                        </p>
                    </div>

                    <div
                        className="col-lg-6 col-md-6 col-sm-6 col-xs-12 side-pad"
                        id="footer-contact">
                        <h2> Contact us </h2>

                        <p>Get in touch! We'd love to hear from you.</p>

                        <div className="row">
                            <div className="one-row side-pad col-lg-6 col-md-12 col-sm-12 col-xs-12">
                                <div className="contact-email">
                                    <a href="mailto:kontakt@fakenewsgraph.de">
                                        kontakt@fakenewsgraph.de
                                    </a>
                                </div>
                            </div>
                            <div className="one-row side-pad col-lg-6 col-md-12 col-sm-12 col-xs-12">
                                <div className="contact-twitter">
                                    <a
                                        href="https://twitter.com/FakeNewsGraph"
                                        target="_blank">
                                        FakeNewsGraph
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="row" id="rights-and-credits">
                    &copy; fakenewsgraph.de 2017
                </div>
            </footer>
        );
    }
}

export default Footer;
