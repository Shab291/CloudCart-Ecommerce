import React from 'react'
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import { Button } from '../styles/Button';
import { FaDiscord, FaInstagram, FaYoutube } from "react-icons/fa";

const Footer = () => {
  return <Wrapper>
        <section className='contact-short'>
            <div className='grid grid-two-column'>
                <div>
                    <h3>Ready to get started?</h3>
                    <h3>Talk to us today</h3>
                </div>
                <div>
                    <Button>
                        <NavLink to="/contact">Get Started</NavLink>
                    </Button>
                </div>
            </div>
        </section>

        {/* Main Footer */}
        <footer>
            <div className="container grid grid-four-column">
                <div className="footer-about">
                    <h3>Shahbaz Technical</h3>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam, voluptas?</p>
                </div>

                <div className="footer-subscribe">
                    <h3>Subscribe to get important updates</h3>
                    <form action="#">
                        <input type="email" placeholder='Your E-mail' />
                        <input type="submit" value="Subscribe" />
                    </form>
                </div>

                <div className="footer-social">
                    <h3>follow us</h3>
                    <div className='footer-social-icons'>
                        <div>
                            <FaDiscord className='icons' />
                        </div>

                        <div>
                            <FaInstagram  className='icons' />
                        </div>

                        <div>
                            <a href="https://www.youtube.com/@gameslushtv" rel='noreferrer' target='_blank'>
                                <FaYoutube className='icons' />
                            </a>
                        </div>

                    </div>
                </div>

                <div className="footer-contact">
                    <h3>Call Us</h3>
                    <a href="tel: +92462262548"> +92 462262548</a>
                </div>

            </div>

            {/* Bottom Footer */}

            <div className="footer-bottom-section">
                <hr />
                <div className="container grid grid-two-column">
                    <p>@{new Date().getFullYear()} Shahbaz Technical. All Rights Reserved</p>
                    <div>
                        <p>Privacy Policy</p>
                        <p>Terms & Conditions</p>
                    </div>
                </div>
            </div>
        </footer>

    </Wrapper>
};

const Wrapper = styled.section`

   .iSIFGq {
        margin: 0;
    }
        
    .contact-short {
        max-width: 60vw;
        margin: auto;
        padding: 5rem 10rem;
        background-color: ${({theme}) => theme.colors.bg};
        border-radius: 1rem;
        box-shadow: ${({theme}) => theme.colors.shadowSupport};
        transform: translateY(50%);


        .grid div: last-child {
            justify-self: end;
            align-self: center;
        
        }
    
    }

    footer {
        padding: 14rem 0 9rem 0;
        background-color: #023047;

        h3 {
            color: ${({theme}) => theme.colors.hr};
            margin-bottom: 2.4rem;
        }

        p {
           color: ${({theme}) => theme.colors.white}; 
        
        }

        .footer-social-icons {
            display: flex;
            gap: 2rem;

            div {
                padding: 1rem;
                border-radius: 50%;
                border: 2px solid ${({theme}) => theme.colors.white};

                .icons {
                    color: ${({theme}) => theme.colors.white};
                    font-size: 2.4rem;
                    position: relative;
                    cursor: pointer;
                }
            
            }

        }
    
    }

    .footer-contact a {
        color: ${({theme}) => theme.colors.white};
        text-decoration: none:

        
    }

    .footer-bottom-section {
        padding-top: 6rem;

        hr {
            margin-bottom: 2rem;
            color: ${({theme}) => theme.colors.white};
            height: 0.1px; 
        
        }
    }

    @media (max-width: ${({theme}) => theme.media.mobile}) {
    
        .contact-short {
            max-width: 80vw;
            margin: 4.8rem auto;
            transform: translateY(0%);
            text-align: center;

            .grid div: last-child {
                justify-self: center;
            }
        
        }

        footer {
            padding: 9rem 0 9rem 0;
        
        }

        .footer-bottom--section {
            padding-top: 4.8rem;
        
        }
 
    }


`;



export default Footer;