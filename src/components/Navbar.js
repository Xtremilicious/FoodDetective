import React, { Component } from 'react';
import styled from 'styled-components';
import {Link} from 'react-router-dom';
import art from '../img/bg.jpg';

export default class Navbar extends Component {
    render() {
        return (
            <NavWrapper className="navbar navbar-expand-sm py-0 navbar-dark shadow-sm d-flex align-items-center px-0">
                 <Link to='/' className='nav-linking'>
                 <div className="row-nav d-flex flex-column justify-content-center align-items-center">
                 <i class="fa fa-home nav-icon text-black"/>
                 <span className="nav-title">Home</span>
                 </div>
                 </Link>
                 <Link to='/testing'  className='nav-linking'>
                 <div className="row-nav d-flex flex-column justify-content-center align-items-center">
                 <i class="fa fa-vial nav-icon  text-green"></i>
                 <span className="nav-title">DART Testing </span>
                 </div>
                 </Link>
                 <Link to='/locate'  className='nav-linking'>
                 <div className="row-nav row-nav flex-column d-flex justify-content-center align-items-center">
                 <i class="fa fa-map-marked nav-icon  text-blue"></i>
                 <span className="nav-title">Locate Labs</span>
                 </div>
                 </Link>
                 <Link to='/validity'  className='nav-linking'>
                 <div className="row-nav row-nav flex-column d-flex justify-content-center align-items-center">
                 <i class="fa fa-digital-tachograph nav-icon  text-yellow"></i>
                 <span className="nav-title">File Complaint</span>
                 </div>
                 </Link>
                 <Link to='/extra'  className='nav-linking'>
                 <div className="row-nav row-nav flex-column d-flex justify-content-center align-items-center">
                 <i class="fa fa-newspaper nav-icon  text-red"></i>
                 <span className="nav-title">Extras</span>
                 </div>
                 </Link>
            </NavWrapper>
        )
    }
}

    const NavWrapper = styled.nav`
    overflow-x: hidden;
    height: 15vh !important;
    background: url(${art});
    background-repeat: no-repeat;
    background-size: 200%;
    .row-nav{
        height: 15vh;
        width: 20vw;

    }
    .nav-linking{
        text-decoration: none;
        color: black
    }
    .text-blue{
        color: #4885ed;
    }
    .text-black{
        color:  #424242;
    }
    .text-green{
        color: #3cba54;
    }
    .text-red{
        color: #db3236;
    }
    .text-yellow{
        color: #f4c20d;
    }
    .row-nav:hover{
        box-shadow: 0px 0px 5px #F3E2A9;

    }
    .nav-icon{
        font-size: 2.4rem;
    }
    .nav-title{
        font-size: 1.1rem;
    }
    .nav-link{
        color: var(--mainDark) !important;
        font-size: 1.3rem;
        text-transform: uppercase;
    }
    .nav-logo{
        height: 3.3rem;
    }
    .search-bar{
        background: #E6E6E6;
        border: 1px solid #BDBDBD;
        width: 62vw;
        height: 2.8rem;
        
    

    }
    .nav-font{
        font-size: 1.4rem;
    }
    .input-form{
        width: 49vw;
        background: transparent;
        border: none;
    }
    .submit-btn{
        height: 2.8rem;
        width: 7vw;
        border: none;
        background: var(--mainRed);
        color: var(--mainWhite);
    }
    @media only screen and (max-width: 1200px) {
        .testy {
            display: none !important; 
  }
}
`;

