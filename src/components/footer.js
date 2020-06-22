import React from 'react';
import styled from 'styled-components';
import { respondBelow } from '../theme/breakPoints';

const FooterStyled = styled.footer`
    font-family: 'Comic Neue';    
`;

const LogoContainerStyled = styled.div`
    background-color: #f0f0f0;
    padding: 30px 0;
    display: flex;
    justify-content: center;
    align-items: center;
`;

const LogoContentStyled = styled.div`
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
`;

const SocialMediaContainerStyled = styled.div`
    background-color: white;
    padding: 5px 0;
    text-align: center;

    img {
        width: 33px;
        margin: 0 5px;
    }
`;

const CopyrightContainerStyled = styled.div`
    padding: 6px 0;
    border-top: 2px solid #8A56BB;
    background-color: #262626;
    text-align: center;

    p {
        font-size: 14px;
        color: white;

        /* Mobile */
        ${respondBelow.sm`
            font-size: 11px;
        `}
    }
`;

function Footer() {
    return (
        <FooterStyled>

            <LogoContainerStyled>

                <LogoContentStyled>

                    <img src="./img/footer/logo.jpg" alt="Logo" title="Logo" />

                    <p>名称：プリンセスコネクト！Rabi-Ribi
                    ジャンル：アニメRPG
                    対応機種：iOS/Android
                    価格：基本無料（一部アイテム課金制）</p>

                </LogoContentStyled>

            </LogoContainerStyled>


            <SocialMediaContainerStyled>
                
                <a href="https://www.facebook.com/RabiRibiGame/">

                    <img src="./img/social-media/facebook-cute.svg" alt="Facebook" title="Facebook" />

                </a>

                <a href="https://www.youtube.com/user/SekaiPro/videos">

                    <img src="./img/social-media/youtube-cute.svg" alt="Youtube" title="Youtube" />

                </a>

                <a href="https://twitter.com/rabiribigame?lang=es">

                    <img src="./img/social-media/twitter-cute.svg" alt="Twitter" title="Twitter" />

                </a>

            </SocialMediaContainerStyled>

            <CopyrightContainerStyled>

                <p>©鍵空とみやき/SEKAI PROJECT・ハッピーシュガーライフ製作委員会</p>

            </CopyrightContainerStyled>

        </FooterStyled>
    )
}

export default Footer;