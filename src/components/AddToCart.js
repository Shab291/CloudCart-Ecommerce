import React from 'react'
import { useState } from 'react';
import styled from 'styled-components';
import { FaCheck } from "react-icons/fa";
import CartAmountToggle from './CartAmountToggle';
import { NavLink } from 'react-router-dom';
import {Button} from '../styles/Button';
import { useCartContext } from '../context/cart_context';


const AddToCart = ({product}) => {

const {addToCart} = useCartContext();
const {id, colors, stock} = product;

const [color, setColor] = useState(colors[0]);
const [amount, setAmount] = useState(1);

const setDecrease = () => {
    amount > 1 ? setAmount(amount - 1) : setAmount(1);
};
const setIncrease= () => {
    stock > amount ? setAmount(amount + 1) : setAmount(stock);
};




  return <Wrapper>
    {/* Colors Available */}

    <div className="colors">
        <p>
          Colors: 
          {colors.map((curColor, index) => {
            return <button key={index} 
            style={{backgroundColor:curColor}} 
            className={color === curColor ? "btnStyle active" : "btnStyle"}
            onClick={() => setColor(curColor)}>

               {color === curColor ? <FaCheck className='checkStyle' /> : null } 

            </button>
          })}  
        </p>
    </div>
    
    {/* Add to Cart */}
    <CartAmountToggle 
        amount={amount}
        setDecrease={setDecrease}
        setIncrease={setIncrease}
    />
    
    <NavLink to="/Cart"
    onClick={ () => addToCart(id, color, amount, product)}
    >
        <Button className='btn'>Add To Cart</Button>
    </NavLink>


  </Wrapper>
}

const Wrapper = styled.section`
    .colors p{
        display: flex;
        justify-content: flex-start;
        align-items: center;
    }

    .btnStyle{
        width: 2rem;
        height: 2rem;
        background-color: #000;
        border-radius: 50%;
        margin-left: 1rem;
        border: none;
        outline: none;
        opacity: 0.6;
        cursor: pointer;

        $:hover{
         opacity: 1;   
        }
    }
    
    .active {
        opacity: 1;
        
    }

    .checkStyle {
        font-size: 1.5rem;
        color: #fff;
        
    }

    /* we can use it as global one too */

    .amount-toggle {
        margin-top: 3rem;
        margin-bottom: 1rem;
        display: flex;
        justify-content: space-around;
        align-items: center;
        font-size: 1.4rem;

        button{
            border: none;
            background-color: #fff;
            cursor: pointer;
        }

        .amount-style {
            font-size: 2.4rem;
            color: ${({theme}) => theme.colors.btn};  
        }

    }


`;

export default AddToCart