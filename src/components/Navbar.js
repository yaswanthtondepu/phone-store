import React from 'react'
import { Link } from 'react-router-dom';
import navLogo from '../logo.svg';
import styled from 'styled-components';
import { ButtonContainer } from './Button';

const Navbar = () => {
  return (
    <NavWrap className='navbar navbar-expand-sm navbar-dark px-sm-5'>
      <Link to='/'>
        <img src={navLogo} alt="store" className='navbar-brand' />
      </Link>

      <ul className='navbar-nav align-items-center'>

        <li className='nav-item ml-5'>
          <Link to='/' className='nav-link'>
            products
          </Link>
        </li>

      </ul>

      <Link to="/cart" className='ms-auto'>
        <ButtonContainer>
          <span className="me-2">
            <i className="fas fa-cart-plus"></i>
          </span>
          my cart
        </ButtonContainer>
      </Link>
    </NavWrap>
  )
}

export default Navbar;

const NavWrap = styled.nav`
  background: var(--mainBlue) ;
  .nav-link{
    color: var(--mainWhite)!important;
    font-size: 1.3rem;
    text-transform: capitalize;
  }
`;

