import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
    * {
        transition: all 300ms ease-in-out;
        font-family: 'Inter', sans-serif;
        list-style: none;
    }

    :root {
        /* Brand */
        --brand1: #4529E6;
        --brand2: #5126EA;
        --brand3: #B0A6F0;
        --brand4: #EDEAFD;

        /* Grey Scale */
        --grey0: #0B0D0D;
        --grey1: #212529;
        --grey2: #495057;
        --grey3: #868E96;
        --grey4: #ADB5BD;
        --grey5: #CED4DA;
        --grey6: #DEE2E6;
        --grey7: #E9ECEF;
        --grey8: #F1F3F5;
        --grey9: #F8F9FA;
        --grey10: #FDFDFD;
        --whiteFixed: #FFFFFF;

        /* Feedback */
        --alert1: #CD2B31;
        --alert2: #FDD8D8;
        --alert3: #FFE5E5;
        --sucess1: #18794E;
        --sucess2: #CCEBD7;
        --sucess3: #DDF3E4;

        /* Random Colors */
        --pink1: #E34D8C;
        --pink2: #C04277;
        --pink3: #7D2A4D;

        --green1: #349974;
        --green2: #2A7D5F;
        --green3: #153D2E;

        --purple1: #7000FF;
        --purple2: #6100FF;
        --purple3: #6200E3;
        --purple4: #5700E3;
        --purple5: #36007D;
        --purple6: #30007D;

        --padding-left: 16px;
        --padding-right: 16px;

        /*Typography */
        --heading1-size: 44px;
        --heading2-size: 36px;
        --heading3-size: 32px;
        --heading4-size: 28px;
        --heading5-size: 24px;
        --heading6-size: 20px;
        --heading7-size: 16px;
        --heading8-size: 12px;

        --body1-size: 16px;
        --body2-size: 14px;

        --button-big-text-size: 16px;
        --button-medium-text-size: 14px;

        --input-placeholder-size: 16px;
        --input-label-size: 14px;
    }

    body {
        background: var(--grey8);
        color: var(--grey2);
    }

    a {
        cursor: pointer;
    }

    /* Text Classes */
    .white {
        color: #FFFFFF;
    }
    /* -- HEADING */
    .heading {
        color: var(--grey1);
        font-weight: 600;

        &-1 {
            font-size: var(--heading1-size);
            font-weight: 700;
            line-height: 56px;

            &-700 {
                font-weight: 700;
            }
        }

        &-2 {
            font-size: var(--heading2-size);
            line-height: 45px;

            &-600 {
                font-weight: 600;
            }
        }

        &-3 {
            font-size: var(--heading3-size);
            line-height: 40px;

            &-500 {
                font-weight: 500;
            }

            &-600 {
                font-weight: 600;
            }
        }

        &-4 {
            font-size: var(--heading4-size);
            line-height: 35px;

            &-500 {
                font-weight: 500;
            }

            &-600 {
                font-weight: 600;
            }
        }

        &-5 {
            font-size: var(--heading5-size);
            line-height: 30px;

            &-500 {
                font-weight: 500;
            }

            &-600 {
                font-weight: 600;
            }
        }

        &-6 {
            font-size: var(--heading6-size);
            line-height: 25px;

            &-500 {
                font-weight: 500;
            }

            &-600 {
                font-weight: 600;
            }
        }

        &-7 {
            font-size: var(--heading7-size);
            line-height: 20px;

            &-500 {
                font-weight: 500;
            }

            &-600 {
                font-weight: 600;
            }
        }

        &-8 {
            font-size: var(--heading8-size);
            line-height: 20px;

            &-500 {
                font-weight: 500;
            }

            &-600 {
                font-weight: 600;
            }
        }
    }

    /* -- BODY */
    .body {
        color: var(--grey2);
        font-weight: 400;

        &-1 {
            font-size: var(--body1-size);
            line-height: 28px;

            &-400 {
                font-weight: 400;
            }

            &-600 {
                font-weight: 600;
            }
        }

        &-2 {
            font-size: var(--body2-size);
            line-height: 24px;

            &-400 {
                font-weight: 400;
            }

            &-600 {
                font-weight: 600;
            }
        }
    }

    /* Buttons Classes */
    .btn {
        outline: none;
        padding: 24px 28px;
        border-radius: 4px;
        font-weight: 600;
        font-size: var(--button-big-text-size);
        display: block;
        text-align: center;
        line-height: 0px;
        cursor: pointer;
        text-decoration: none;
        transition: all 300ms ease-in-out;

        &-medium {
            padding: 18px;
            font-size: var(--button-medium-text-size);
        }

        &-grey-1 {
            background: var(--grey0);
            border: 1px solid var(--grey0);
            color: #FFFFFF;

            &:hover {
                background: var(--grey1);
                border: 1px solid var(--grey1);
            }
        }

        &-negative {
            background: var(--grey6);
            border: 1px solid var(--grey6);
            color: var(--grey2);

            &:hover {
                background: var(--grey5);
                border: 1px solid var(--grey5);
            }
        }

        &-disabled,
        &:disabled {
            background: var(--grey5);
            border: 1px solid var(--grey5);
            color: #FFFFFF;
            cursor: not-allowed;
        }

        &-primary {
            background: var(--brand1);
            border: 1px solid var(--brand1);
            color: #FFFFFF;

            &:hover {
                background: var(--brand2);
                border: 1px solid var(--brand2);
            }

            &-disabled,
            &:disabled {
                background: var(--brand3);
                border: 1px solid var(--brand3);
                color: var(--brand4);
                cursor: not-allowed
            }
        }

        &-primary-opacity {
            background: var(--brand4);
            border: 1px solid var(--brand4);
            color: var(--brand1);

            &:hover {
                background: var(--brand1);
                border: 1px solid var(--brand1);
                color: #FFFFFF;
            }
        }

        &-light {
            background: var(--grey10);
            color: var(--grey1);
            border: 1px solid var(--grey10);

            &:hover {
                background: var(--grey1);
                border: 1px solid var(--grey1);
                color: var(--grey10);
            }
        }

        &-outline {
            background: transparent;
            border: 1px solid var(--grey0);
            color: var(--grey0);

            &:hover {
                background-color: var(--grey0);
                color: #FFFFFF;
            }

            &-light {
                border: 1px solid var(--grey10);
                color: var(--grey10);

                &:hover {
                    background: var(--grey10);
                    color: var(--grey1);
                }
            }

            &-2 {
                border: 1px solid var(--grey4);
                color: var(--grey0);

                &:hover {
                    background-color: var(--grey1);
                    border: 1px solid var(--grey1);
                    color: var(--grey10);
                }
            }

            &-primary {
                border: 1px solid var(--brand1);
                color: var(--brand1);

                &:hover {
                    background: var(--brand4);
                }
            }
        }

        &-link {
            background: transparent;
            color: var(--grey0);

            &:hover {
                background: var(--grey8);
            }

            &-primary {
                color: var(--brand1);

                &:hover {
                    background: transparent;
                }
            }
        }

        &-alert {
            background: var(--alert3);
            border: 1px solid var(--alert3);
            color: var(--alert1);

            &:hover {
                background: var(--alert2);
                border: 1px solid var(--alert2);
            }
        }

        &-success {
            background: var(--sucess3);
            border: 1px solid var(--sucess3);
            color: var(--sucess1);

            &:hover {
                background: var(--sucess2);
                border: 1px solid var(--sucess2);
            }
        }
    }

    label {
        display: block;
        font-weight: 500;
        font-size: var(--input-label-size);
        line-height: 17px;
        color: var(--grey1);
        margin-bottom: 8px;
        margin-top: 24px;
    }

    input, textarea {
        border: 1px solid var(--grey7);
        border-radius: 4px;
        padding: 0px 16px;
        min-height: 48px;
        width: -moz-available;
        width: -webkit-fill-available;
        color: var(--grey1);
        font-size: var(--input-placeholder-size);
        background: transparent;

        &::placeholder {
            font-family: 'Inter', sans-serif;
            font-weight: 400;
            font-size: var(--input-placeholder-size);
            color: var(--grey3);
        }

        &:hover {
            border: 1px solid var(--grey4);
        }

        &:focus {
            outline: none;
            border: 1px solid var(--brand1);
        }
    }

    .w-100 {
        width: 100%;
    }
`;

export default GlobalStyle;
