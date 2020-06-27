import React from 'react';
import styled from 'styled-components';
import { respondBelow } from '../theme/breakPoints';


const FooterStyled = styled.footer`
    font-family: ${ props => props.theme.fontFamily.primary };  
    background: linear-gradient(0deg, rgba(${ props => props.theme.colorsRGB.secondary },1) 0%, rgba(${ props => props.theme.colorsRGB.rose },1) 100%);
    position: relative;
    margin-top: 200px;
    padding-top: 40px; 

    /* Cloud Top */
    &:before {
        content: '';
        background-image: url('./img/background/frame-cloud-top.png');
        background-position: center bottom;
        background-repeat: repeat-x;
        position: absolute;
        width: 100%;
        height: 68px;
        top: -68px;
        right: 0%;
    }
`;

const LogoContainerStyled = styled.div`
    padding: 30px 0;
    display: flex;
    justify-content: center;
    align-items: center;

    div {
        display: flex;
        justify-content: center;
        align-items: center;
        max-width: 500px;

        img {
            width: 100%;
            max-width: 250px;
            margin-right: 15px;
        }

        p {
            font-size: 14px;
            margin-left: 15px;
        }

        /* Mobile */
        ${respondBelow.sm`
            flex-wrap: wrap;
            padding: 0 20px;
            
            img {
                max-width: initial;
                margin-right: 0;
                margin-bottom: 20px;
            }

            p {
                margin-left: 0;
            }
        `}
    }
`;

const SocialMediaContainerStyled = styled.div`
    padding: 5px 0;
    text-align: center;

    img {
        background-color: white;
        padding: 20px;
        border-radius: 50%;
        width: 60px;
        height: 60px;
        margin: 0 5px;
    }
`;

const CopyrightContainerStyled = styled.div`
    padding: 6px 0;
    text-align: center;

    p {
        font-size: 14px;
        color: ${ props => props.theme.colors.white };

        /* Mobile */
        ${respondBelow.sm`
            font-size: 11px;
        `}
    }
`;

function Footer() {
    return (
        <FooterStyled>

            <SocialMediaContainerStyled>
                
                <a href="https://www.facebook.com/RabiRibiGame/">

                    <img src="./img/social-media/facebook.svg" alt="Facebook" title="Facebook" />

                </a>

                <a href="https://twitter.com/rabiribigame?lang=es">

                    <img src="./img/social-media/twitter.svg" alt="Twitter" title="Twitter" />

                </a>

            </SocialMediaContainerStyled>

            <LogoContainerStyled>

                <div>

                    <img src="./img/footer/logo.jpg" alt="Logo" title="Logo" />

                    <p>名称：プリンセスコネクト！Rabi-Ribi
                    ジャンル：アニメRPG
                    対応機種：iOS/Android
                    価格：基本無料（一部アイテム課金制）</p>

                </div>

            </LogoContainerStyled>

            <CopyrightContainerStyled>

                <p>©鍵空とみやき/SEKAI PROJECT・ハッピーシュガーライフ製作委員会</p>

            </CopyrightContainerStyled>

        </FooterStyled>
    )
}

export default Footer;