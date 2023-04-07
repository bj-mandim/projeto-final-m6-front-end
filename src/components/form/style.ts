import styled from "styled-components";

export const Form = styled.form`
    background: #FDFDFD;
    border-radius: 4px;
    padding: 44px 48px;
    width: 100%;
    max-width: 412px;
    margin: 15vh auto;

    .inline-fields {
        display: flex;
        gap: 16px;

        div {
            width: 48%;
        }
    }

    label {
        display: block;
        font-weight: 500;
        font-size: 14px;
        line-height: 17px;
        color: #212529;
        margin-bottom: 8px;
        margin-top: 24px;
    }

    input {
        border: 1.5px solid #E9ECEF;
        border-radius: 4px;
        padding: 0px 16px;
        min-height: 48px;
        width: -webkit-fill-available;
        color: #212529;
        font-size: 16px;
        background: transparent;

        &::placeholder {
            font-family: 'Inter', sans-serif;
            font-weight: 400;
            font-size: 16px;
            color: #868E96;
        }

        &:hover {
            border: 1px solid #ADB5BD;
        }

        &:focus {
            outline: none;
            border: 1px solid var(--brand1);
        }
    }

    .forgot-pass {
        display: block;
        text-align: right;
        font-weight: 500;
        font-size: 14px;
        line-height: 24px;
        color: #495057;
        text-decoration: none;
        margin-top: 8px;
        margin-bottom: 24px;
    }

    .extra-text {
        text-align: center;
        color: #495057;
        font-size: 14px;
        line-height: 24px;
        margin: 24px 0;
    }
`;