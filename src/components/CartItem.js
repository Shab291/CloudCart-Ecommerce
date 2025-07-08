import React from 'react'
import FormatePrice from "../Helper/FormatePrice";
import CartAmountToggle from './CartAmountToggle';
import { FaTrash } from "react-icons/fa";
import { useCartContext } from '../context/cart_context';



const CartItem = ({id, name, image, color, price, amount}) => {

    const { removeItem, setDecrease, setIncrease } = useCartContext();

    
  return (
    <div className='cart_heading grid grid-five-column'>
        {/* Image */}
        <div className='cart-image--name'>
            <div>
                <figure>
                    <img src={image} alt={id} />
                </figure>
            </div>

            <div>
                <p>{name}</p>
                <div className='color-div'>
                    <p>color: </p>
                    <div 
                    className='color-style' 
                    style={{backgroundColor: color, color: color }}></div>
                </div>
            </div>
        </div>

        {/* Price */}
        <div className='cart-hide'>
            <p> <FormatePrice price={price} /></p>
        </div>

        {/* Quantity */}
        <CartAmountToggle 
            amount={amount}
            setDecrease={() => setDecrease(id)}
            setIncrease={() => setIncrease(id)}
        />

        {/* Sub-Total */}
        <div className="cart-hide">
            <p><FormatePrice price = {price * amount} /></p>
        </div>

        {/* Remove Icon */}
        <div>
        <FaTrash className='remove_icon' onClick={() => removeItem(id)} />
        </div>
    </div>
  )
}

export default CartItem