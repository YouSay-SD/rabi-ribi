import React from 'react';
import styled from 'styled-components';

const FooterStyled = styled.footer`
    font-family: 'Comic Neue';    

    .footer__logo-container {
        background-color: #f0f0f0;
        padding: 30px 0;
        display: flex;
        justify-content: center;
        align-items: center;

        img {
            max-width: 250px;
            margin-right: 15px;
        }

        p {
            margin-left: 15px;
        }
    }

    .footer__social-media-container {
        background-color: white;
        height: 300px;
    }
`

function Footer() {
    return (
        <FooterStyled>

            <div className="container">

                <div className="footer__logo-container">

                    <img src="./img/footer/logo.jpg" alt="Logo" title="Logo" />

                    <p>Lorem impupt alsnda</p>

                </div>

                <div className="footer__social-media-container">



                </div>

            </div>

        </FooterStyled>
    )
}

export default Footer;