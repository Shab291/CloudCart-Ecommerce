import React from 'react'
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import Navbar from './Navbar';

const Header = () => {
  return (
    <MainHeader>

        <NavLink to={"/"}>
            <img src="./images/Website-Logo.png" alt="my logo img" />
        </NavLink>
        <Navbar />
    </MainHeader>
  )
};

const MainHeader = styled.header`

padding: 0 4.8rem;
height: 7rem;
background-color: ${({theme}) => theme.colors.bg};
display: flex;
justify-content: space-between;
align-items: center;
position: relative;

.logo {
height: 5rem;
}



`;

export default Header;