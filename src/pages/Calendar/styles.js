import styled from 'styled-components';
import { MediaQueries } from '../../constants/MediaSettings';

export const Container = styled.div`
    width: min(90%, 1100px);
    height: 90vh;
    margin: 2rem auto;

    border-radius: 8px;
    background-color: white;

    > table {
        width: 100%;
        overflow-x: scroll;

        > thead {
            > tr {
                width: 100%;
                display: flex;
                justify-content:  space-around;
                align-items: center;
                border-radius: 8px 8px 0 0;

                padding: 5px;

                color: #fff;
                background-color: #3174B0;

                > th {
                    text-overflow: ellipsis;
                }
            }
        }

        > tbody {
            > tr {
                width: 100%;
                display: flex;
                justify-content:  space-around;
                align-items: center;

                height: 95px;

                > td {
                    width: 100%;
                    height: 100%;
                    padding: 5px;
                    border:1px solid black ;
                    font-size: 16px;
                    font-weight: 600;
                    cursor: pointer;
                    transition: all ease-in  0.3;

                    &:hover {
                        opacity: 0.8;
                        background-color: #e8f9ff;
                    }

                    &.weekend {
                        color: #3174B0;
                        background-color: #e5ebf1;

                        &:hover {
                            background-color: #e8f9ff;
                        }
                    }

                    &.today {
                        color: red;
                        background-color: #c0f0ff;
                    }

                    > span {
                    &.dayOff {
                        opacity: 0.3;
                    }
                    }

                    > p {
                        font-size: 12px;
                        font-weight: 600;
                        color: #3174B0;
                    }

                    @media ${MediaQueries.XSMALL}, ${MediaQueries.SMALL} {
                        font-size: 12px;
                    }
                }
            }
        }
    }

    @media ${MediaQueries.MEDIUM}, ${MediaQueries.SMALL} {
        font-size: 10px;
    }
`;

export const Reminder = styled.div`
    width: 100%;
    display: flex;
    justify-content:  flex-start;
    align-items: center;

    background-color: #3174B0;
    padding: 3px 3px 3px 5px;
    border-radius: 8px;
    color: white;

    @media ${MediaQueries.XLARGE}, ${MediaQueries.LARGE}, ${MediaQueries.MEDIUM} {
        font-size: 14px;
        text-overflow: ellipsis;
    }

    @media ${MediaQueries.XSMALL}, ${MediaQueries.SMALL} {
        padding: 3px 20px 20px 5px;
        
        > span {
          display: none;
        }
    }
`;
