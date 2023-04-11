import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
    * {
        transition: all 300ms ease-in-out;
        list-style: none;
        margin: 0;
        padding: 0;
        button{
            cursor: pointer;
        }
        img{
            object-fit: cover;
        }
    }

    :root {
        /* Brand */
        --brand1: #4529E6;
        --brand2: #5126EA;
        --brand3: #B0A6F0;
        --brand4: #EDEAFD;

        --padding-left: 16px;
        --padding-right: 16px;
    }

    body {
        background: #F1F3F5;
        width: 100vw;
        height: 100vh;
    }

    .btn {
        outline: none;
        padding: 24px 28px;
        border-radius: 4px;
        font-weight: 600;
        font-size: 16px;
        display: block;
        text-align: center;
        line-height: 0px;
        cursor: pointer;
        text-decoration: none;
        transition: all 300ms ease-in-out;
    }

    .btn-primary {
        background: #4529E6;
        border: 1px solid #4529E6;
        color: #FFFFFF;

        &:hover {
            background: transparent;
            color: #4529E6;
        }
    }

    .btn-outline {
        border: 1.5px solid #0B0D0D;
        color: #0B0D0D;

        &:hover {
            background-color: #0B0D0D;
            color: #fff;
        }
    }

    .btn-outline-light {
        border: 1.5px solid #ADB5BD;
        color: #0B0D0D;

        &:hover {
            background-color: #ADB5BD;
            color: #fff;
        }
    }

    .btn-link {
        color: #4529E6;
    }

    .w-100 {
        width: 100%;
    }
`;

export default GlobalStyle;
