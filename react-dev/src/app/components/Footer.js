import React, {Component} from "react";
import styled from 'styled-components';
import {Link} from "react-router";

const FooterWrapper = styled.footer`
  background-color: #111111;
  box-shadow: 0 0 35px 6px rgba(0, 0, 0, 0.6);
  padding-top: 20px;
  padding-bottom: 20px;
  margin-bottom: 0;
  
  p{
    font-size: 15px;
    text-align: center;
    color: #eeeeee;
    
    @media screen and (max-width: ${props => props.theme.screenXxsMax}){
        font-size: 12px;
    }
  }
  
  
  
  
`;


class Footer extends Component {
    render() {
        return (
            <FooterWrapper>
                <p>&copy; 2017 fakenewsgraph.de- <Link to={"/impressum"}>Impressum</Link></p>
            </FooterWrapper>
        )
    }

}

export default Footer;