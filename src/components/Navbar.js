import React, { useState } from 'react'
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import { FiShoppingCart } from "react-icons/fi";
import { CgMenu, CgClose } from "react-icons/cg";
import { useCartContext } from '../context/cart_context';
import { useAuth0 } from "@auth0/auth0-react";
import {Button} from "../styles/Button";

const Navbar = () => {
  
  const [menuIcon, setMenuIcom] = useState();
  const { user, loginWithRedirect, logout, isAuthenticated } = useAuth0();

  const { total_item } = useCartContext();

  const Nav = styled.nav`

    .navbar-lists{

      display: flex;
      gap: 4.8rem;
      align-items: center;
      margin-right: 30px;
    
      .navbar-link{

        &:link, 
        &:visited {
          display: inline-block;
          text-decoration: none;
          font-size: 1.8rem;
          font-weight: 500;
          text-transform: uppercase;
          color: ${({theme}) =>  theme.colors.black};
          transition: color 0.3s linear;
        } 
      
      
        &:hover,
        &:active {

          color: ${({theme}) => theme.colors.helper};
  
        }
          
      }   
      
    }

    .mobile-navbar-btn {
      display: none;
      background-color: transparent;
      cursor: pointer;
      border: none;
    }

    .mobile-nav-icon[name="close-outline"] {
      display: none;
    }

     .close-outline {
      display: none; 
    }

    .cart-trolley--link {
      position: relative;

      .cart-trolley {
        position:  relative;
        font-size: 3.2rem;
      }

     .cart-total--item {
        width: 2.3rem;
        height: 2.2rem;
        position: absolute;
        background-color: #000;
        color: #000;
        border-radius: 50%;
        display: grid;
        place-items: center;
        top: -30%;
        left: 70%;
        background-color: ${({theme}) => theme.colors.helper};
     
      }
    
    }

    .container{
      display: flex;
      align-items: center;
    }

    

    .user-avatar {
      width: 40px;
      height: 40px;
      border-radius: 50%;
      margin-right: 10px;
    }

    .user-login--name {
      text-transform: capitalize;
    }

    .user-logout,
    .user-login {
      font-size: 1.4rem;
      padding: 0.8rem 1.4rem;
    }

  
    @media (max-width: ${({theme}) => theme.media.mobile}) {

      .mobile-navbar-btn {

        display: inline-block;
        z-index: 9999;
        border: ${({theme}) => theme.colors.black};

        .mobile-nav-icon {
          font-size: 4.2rem;
          margin-right: 10px;
          color: ${({theme}) => theme.colors.black};
        }

      }

      .active .mobile-nav-icon {
        display: none;
        font-size: 4.2rem;
        position: absolute;
        top: 30%;
        right: 10%;
        color: ${({theme}) => theme.colors.black};
        z-index: 9999;

      }

      .active .close-outline {
        display: inline-block;
      }

      .navbar-lists {
        width: 100vw;
        height: 100vh;
        position: absolute;
        top: 0;
        left: 0;
        background-color: #fff;

        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;

        visibility: hidden;
        opacity: 0;
        transform: translateX(100%);
        /* transform:-origin: top; */ 
        transition: all 3s linear;
      

      }

      .active .navbar-lists {
        visibility: visible;
        opacity: 1;
        transform: translateX(0);
        z-index: 999;
        transfrom-origin: right;
        transition: all 3s linear;

        .navbar-link {
          font-size: 3.5rem;
        }
      }   


      .cart-trolley--link {
        position: relative;

        .cart-trolley {
          position: relative;
          font-size: 5.2rem;
        }

        .cart-total--item{
          font-size: 2.3rem;
          width: 2.5rem;
          height: 2.5rem;

        }
      }
        
    
    }

   
  `;



  return (
    <Nav>
        <div className={menuIcon ? "navbar active" : "navbar" }>
            <ul className='navbar-lists'>
              <li>
                <NavLink to="/" className="navbar-link" onClick={() => setMenuIcom(false)}>
                  Home
                </NavLink>
              </li>

              <li>
                <NavLink to="/about" className="navbar-link" onClick={() => setMenuIcom(false)}>
                  About
                </NavLink>
              </li>

              <li>
                <NavLink to="/products" className="navbar-link" onClick={() => setMenuIcom(false)}>
                  Products
                </NavLink>
              </li>

              <li>
                <NavLink to="/contact" className="navbar-link" onClick={() => setMenuIcom(false)}>
                  Contact
                </NavLink>
              </li>

              {
                isAuthenticated && (
                  <div className='container'>
                  <li>
                    <img src={user.picture} alt={user.name} className='user-avatar' />
                  </li>
    
                  <li>
                    <h3 className='user-login--name'>{user.name}</h3>
                  </li>
                  </div>
                  
                )
              }


              {isAuthenticated ? 

                <li>
                <Button onClick={() => logout({ logoutParams: { returnTo: window.location.origin } })}>
                  Log Out
                </Button>
                </li>
                : 
                <li>
                <Button onClick={() => loginWithRedirect()}>Log In</Button>
                </li>
              }
              

              <li>
                <NavLink to="/cart" className="navbar-link cart-trolley--link">
                  <FiShoppingCart className='cart-trolley'/>
                  <span className="cart-total--item">{total_item}</span>
                </NavLink>
              </li>
            </ul>


            {/* Two button for open and close of menu */}

            <div className='mobile-navbar-btn'>
            <CgMenu name='menu-outline' className='mobile-nav-icon' onClick={() => setMenuIcom(true)} />
            <CgClose name='close-outline' className='mobile-nav-icon close-outline' onClick={() => setMenuIcom(false)} />
            </div>




        </div>

    </Nav>
  )
};

export default Navbar;