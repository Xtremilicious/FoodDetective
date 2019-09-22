import React, { Component } from 'react';
import styled from 'styled-components';

export default class Valid extends Component {
    render() {
        return (
            <Wrapper>
                <FrameWrapper scrolling= 'no' src='https://legaldocs.co.in/food-license/check-fssai-license-number' className='container-fluid testy' title='test'></FrameWrapper>
            </Wrapper>
        )
    }
}
const Wrapper = styled.div`
        overflow: hidden;
`;

const FrameWrapper = styled.iframe`
    height: 82vh;
    margin: 0px;
    padding: 0px;
    border: none;
    margin-bottom: -70px;
    margin-top: -100px;



`;