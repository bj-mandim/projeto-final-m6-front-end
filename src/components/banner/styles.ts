import styled from "styled-components";
import car from "../../img/Car.png";

export const BannerContainer = styled.section`
    background-image: url(${car});
    background-position: center;
    background-repeat: no-repeat;
    background-size: contain;
    position: relative;
    min-height: 530px;
    display: flex;
    justify-content: center;
    font-family: 'Lexend';

    @media (max-width: 767px) {
        background-size: cover;
        background-position: bottom;
    }

    &:after {
        content: "";
        width: 100%;
        height: 100%;
        display: block;
        position: absolute;
        left: 0;
        right: 0;
        top: 0;
        bottom: 0;
        background: linear-gradient(180deg, rgba(0, 0, 0, 0.29) 0%, #000000 100%);
        z-index: 1;
    }

    .banner-content {
        z-index: 2;
        position: relative;
        display: flex;
        justify-content: center;
        flex-direction: column;
        align-items: center;
        text-align: center;
        padding: 0 32px;

        h1 {
            margin: 0 0 8px 0;
        }

        p {
            margin: 0;
            font-weight: 500;
        }

        @media (max-width: 767px) {

            justify-content: flex-start;
            padding-top: 52px;

            h1 {
                margin-bottom: 16px;
                font-size: var(--heading2-size);
            }

            p {
                font-weight: 400;
                font-size: var(--heading5-size);
            }
        }
    }
`;