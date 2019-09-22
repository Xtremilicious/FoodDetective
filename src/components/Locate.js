import React, { Component } from 'react';
import { laboratories } from '../data';
import styled from 'styled-components';

export default class Locate extends Component {
    state = {
        details: laboratories,
        search: ''
    }
    updateSearch = (event) => {
        event.preventDefault();
        const query = event.target.value;
        this.setState(() => {
            return {
                search: query
            }
        });
    };
    handleSearch = (query) => {
        this.setState(() => {
            return {
                search: query
            }
        });
    };
    render() {
        return (
            <Wrapper className="container-fluid p-5 d-flex flex-column align-items-center">
                
                <div className="search-bar d-flex align-items-center mb-5">
                    <span className='px-sm-3'>
                        <i className="fa fa-search nav-font"></i>
                    </span>
                    <input type='text' placeholder='Start typing to search cities' className='input-form' value={this.state.search} onChange={this.updateSearch} />
                </div>
                <table class="table table-striped testy">
                    <thead className='thead-my'>
                        <tr>
                            <th>City</th>
                            <th>Name</th>
                            <th>Address</th>
                            <th>Phone</th>
                            {/*<th>Website</th> */} 
                            <th>Location</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.state.details.filter((detail) => {
                            return detail.city.toLowerCase().indexOf(this.state.search.toLowerCase()) !== -1;
                        }).map(detail => {
                            return (
                                <tr>
                                    <td>{detail.city}</td>
                                    <td>{detail.name}</td>
                                    <td>{detail.address1}<br/>
                                    {detail.address2}</td>
                                    <td>{detail.phone1}<br/>
                                    {detail.phone2}</td>
                                    {/*<td>{detail.web}</td>*/} 
                                    <td><a href={`https://www.google.com/maps/place/${detail.name} ${detail.city}`} target='_blank' rel='noopener noreferrer'><button className='button-my'>Locate Laboratory</button></a>
                                    <br/> <span className='text-danger'>Click Search on New Page</span> </td>
                                </tr>
                            );
                        })}
                    </tbody>
                </table>
            </Wrapper>
        )
    }
}

const Wrapper = styled.div`
    background: #fff9e1;
    .search-bar{
        background: transparent;
        border: 1px solid #424242;
        width: 30vw;
        height: 2.8rem;
    }
    .text-danger{
        font-size: 0.8rem !important;
    }
    .thead-my{
        background: #424242 !important;
        color: white;
    }
    .button-my{
        border-radius: 0.2rem;
        border: 1px solid #424242;
        background: transparent;
        padding: 0.5rem;
    }
    .button-my:hover{
        transition:all 0.5s ease-in-out;
        border: 1px solid #424242;
        background: #424242;
        color: white;
    }
    .input-form{
        width: 25vw;
        background: transparent;
        border: none;
    }
    @media only screen and (max-width: 1200px) {
        .testy {
            display: none !important; 
  }
}
`;