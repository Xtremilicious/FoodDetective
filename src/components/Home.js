import React, { Component } from 'react';
import styled from 'styled-components';
import logo from '../img/art.png';
import art from '../img/bg.jpg';

export default class Home extends Component {
    render() {
        return (
            <Wrapper>
                <div className='d-flex flex-column align-items-end '>
                    <div className = 'd-flex flex-column align-items-center testy2'>
                <h1 className='title'><span className='title-dark'>Food</span>Detecto</h1>
                <h4 className='align-items-end sub-title'>Because We Care What You Eat</h4>
                </div>
                </div>
                <div className='align-self-end'>
                    <img className='img-graphic' src={logo} alt='lul'/>
                </div>
            </Wrapper>
        )
    }
}

const Wrapper = styled.div`
    display: grid;
    background: url(${art});
    background-repeat: no-repeat;
    background-size: 100%;

    height: 85vh;
    grid-template-columns: 1fr 1fr;
    align-items: center;
    .title{
        font-size: 5rem;
        font-weight: bold;
        color: #db3236;
    }
    .title-dark{
        color: #424242;
    }
    .sub-title{
        
        color: #424242;
    }
    .img-graphic{
        height: 24rem;
    }
`;
