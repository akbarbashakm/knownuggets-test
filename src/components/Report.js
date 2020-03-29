import React, { Component } from 'react';
import { connect } from "react-redux";
import { bindActionCreators } from 'redux';
import getEX1JSON from '../services/getEX1JSON';
import styled from "styled-components";
import config from '../config/ex1Config';


const getValue = (data, Column) => {
    try {
        return typeof(Column) === 'string' ? data[Column] : Column(data)
    } catch (err) {
        return null
    }
}

const TABLE = styled.table`
    font-family: arial, sans-serif;
    border-collapse: collapse;
    width: 100%;
    border: 2px solid white;
`;

const TD = styled.td`
    cursor: pointer;
    border: 2px solid #fff;
    text-align: left;
    padding: 8px;
`;

const TH = styled.th`
    cursor: pointer;
    border: 1px solid #fff;
    padding: 8px;
    background: #000;
    color: white;
    text-align: center;
`;

const TR = styled.tr`
    cursor: pointer;
    background: azure;
    &:nth-child(even) {
        background-color: beige;
    }
`;

class Report extends Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }

    componentDidMount = () => {
        this.props.getJSONData();
    }

    render() {
        const { ex1Data = [] } = this.props;
        return (
            <div>
                <TABLE>
                    <TR>
                        {
                            (config || []).map(({ HeaderName }, index) => {
                                return (
                                    <TH key={index}>{HeaderName}</TH>
                                )
                            })
                        }
                    </TR>
                    {
                        (ex1Data || []).map((data, jIndex) => {
                            return (
                                <TR key={jIndex}>
                                    {
                                        (config || []).map(({ Column, Merge }, kIndex) => {
                                            return (
                                                <TD key={kIndex}>
                                                    {getValue(data, Column)}
                                                </TD>
                                            )
                                        })
                                    }
                                </TR>
                            )
                        })
                    }
                </TABLE>
            </div>
        )
    }
}

const mapStateToProp = ({ app }) => {
    const { ex1Data = [] } = app;
    return {
        ex1Data
    }
}

const mapDispatchToProps = dispatch => {
    return {
        getJSONData: bindActionCreators(
            getEX1JSON,
            dispatch
        )
    };
};

export default connect(mapStateToProp, mapDispatchToProps)(Report);