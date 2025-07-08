import React, {useState} from 'react'
//import { NavLink } from 'react-router-dom';
//import styled from 'styled-components';
//import { Button } from "../styles/Button";
import {TiChevronLeftOutline, TiChevronRightOutline} from 'https://cdn.skypack.dev/react-icons@4.12.0/ti';




const CARDS = 10;
const MAX_VISIBILITY = 3;

const Card = ({title, content}) => (
  <div className='card'>
    <h2>{title}</h2>
    <p>{content}</p>
  </div>
);

const Carousel = ({children}) => {
    const [active, setActive] = useState(2);
    const count = React.Children.count(children);
    
    return (
      <div className='carousel'>
        {active > 0 && <button className='nav left' onClick={() => setActive(i => i - 1)}><TiChevronLeftOutline/></button>}
        {React.Children.map(children, (child, i) => (
          <div className='card-container' style={{
              '--active': i === active ? 1 : 0,
              '--offset': (active - i) / 3,
              '--direction': Math.sign(active - i),
              '--abs-offset': Math.abs(active - i) / 3,
              'pointer-events': active === i ? 'auto' : 'none',
              'opacity': Math.abs(active - i) >= MAX_VISIBILITY ? '0' : '1',
              'display': Math.abs(active - i) > MAX_VISIBILITY ? 'none' : 'block',
            }}>
            {child}
          </div>
        ))}
        {active < count - 1 && <button className='nav right' onClick={() => setActive(i => i + 1)}><TiChevronRightOutline/></button>}
      </div>
    );
  };

const HeroSection = ({myData}) => {
    
    const {name} = myData;
    const myImage = <img src="./images/Artboard1copy4.webp" alt='myImage' className='hero-img'/>

    return (
    <div className='Container'>
        <div className='Data-info'>
            <p >Welcome to</p>
            <h1>{name}</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorum inventore dolore quisquam laborum ratione qui ab, deleniti eaque.</p>
        </div>

        <div>
        <Carousel>
        {[...new Array(CARDS)].map((_, i) => (
            <Card title={'Card ' + (i + 1)} content={myImage}/>
        ))}
        </Carousel>
        </div>
    </div>
    );
  };


export default HeroSection
/* Before Hero Section */



