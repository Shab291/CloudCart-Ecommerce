import styled from "styled-components";
import { useCartContext } from "./context/cart_context";
import CartItem from "./components/CartItem";
import { NavLink } from "react-router-dom";
import { Button } from "./styles/Button";
import FormatePrice from "./Helper/FormatePrice";
import { useAuth0 } from "@auth0/auth0-react";


const Cart = () => {

  const { user, isAuthenticated } = useAuth0();

  const {cart, clearCart, total_price, shipping_fee} = useCartContext();

  if(cart.length === 0) {
    return (
      <EmptyDiv>
        <h3>No Items in Cart</h3>
      </EmptyDiv>
    )
  }

  return <Wrapper>
    <div className="container">
        {
          isAuthenticated && (
            <div className="cart-user--profile">
             <img src={user.picture} alt={user.name}/>

              <h2 className="cart-user--name">{user.name}</h2>

            </div>
          )
        }



      <div className="cart_heading grid grid-five-column">
        <p>Item</p>
        <p className="cart_hide">Price</p>
        <p>Quantity</p>
        <p className="card-hide">Sub-total</p>
        <p>Remove</p>
      </div>
      <hr/>

      <div className="cart-item">
        {
          cart.map((curElem) => {
            
            return <CartItem key={curElem.id} {...curElem} />;
          })
        }
      </div>
      <hr />

      <div className="cart-two-button">
        <NavLink to="/products">
          <Button>Continue Shopping</Button>
        </NavLink>

        <Button className="btn btn-clear" onClick={clearCart}>Clear Cart</Button>
      </div>

      {/* Order Total Amount */}

      <div className="order-total--amount">
        <div className="order-total--subdata">
          <div>
            <p>Sub-Total:</p>
            <p><FormatePrice price={total_price} /></p>
          </div>
          
          <div>
            <p>Shipping Fee:</p>
            <p> <FormatePrice price={shipping_fee} /></p>
          </div>

          <hr/>

          <div>
            <p>Order Total:</p>
            <p> <FormatePrice price={shipping_fee + total_price} /></p>
          </div>


          

        </div>
      </div>

    </div>

  </Wrapper>;
};

const EmptyDiv = styled.div`
  display: grid;
  place-items: center;
  height: 50vh;

    h3 {
      font-size: 4.2rem;
      text-transform: capitalize;
      font-weight: 300;
    }


`;

const Wrapper = styled.section`
  padding: 9rem 0;

  .grid-four-column {
    grid-template-columns: repeat(4, 1fr);
  }

  .grid-five-column {
    grid-template-columns: repeat(4, 1fr) 0.3fr;
    text-align: center;
    align-items: center;
  }
  .cart-heading {
    text-align: center;
    text-transform: uppercase;
  }
  hr {
    margin-top: 1rem;
  }
  .cart-item {
    padding: 3.2rem 0;
    display: flex;
    flex-direction: column;
    gap: 3.2rem;
  }

  .cart-user--profile {
    display: flex;
    justify-content: flex-start;
    align-items: center;
    gap: 1.2rem;
    margin-bottom: 5.4rem;

    img {
      width: 8rem;
      height: 8rem;
      border-radius: 20%;
    }
    h2 {
      font-size: 2.4rem;
    }
  }
  .cart-user--name {
    text-transform: capitalize;
  }
  .cart-image--name {
    /* background-color: red; */
    align-items: center;
    display: grid;
    gap: 1rem;
    grid-template-columns: 0.4fr 1fr;
    text-transform: capitalize;
    text-align: left;
    img {
      max-width: 5rem;
      height: 5rem;
      object-fit: contain;
      color: transparent;
    }

    .color-div {
      display: flex;
      align-items: center;
      justify-content: flex-start;
      gap: 1rem;

      .color-style {
        width: 1.4rem;
        height: 1.4rem;

        border-radius: 50%;
      }
    }
  }

  .cart-two-button {
    margin-top: 2rem;
    display: flex;
    justify-content: space-between;

    .btn-clear {
      background-color: #e74c3c;
    }
  }

  .amount-toggle {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 2.4rem;
    font-size: 1.4rem;

    button {
      border: none;
      background-color: #fff;
      cursor: pointer;
    }

    .amount-style {
      font-size: 2.4rem;
      color: ${({ theme }) => theme.colors.btn};
    }
  }

  .remove_icon {
    font-size: 1.6rem;
    color: #e74c3c;
    cursor: pointer;
  }

  .order-total--amount {
    width: 100%;
    margin: 4.8rem 0;
    text-transform: capitalize;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    align-items: flex-end;

    .order-total--subdata {
      border: 0.1rem solid #f0f0f0;
      display: flex;
      flex-direction: column;
      gap: 1.8rem;
      padding: 3.2rem;
    }
    div {
      display: flex;
      gap: 3.2rem;
      justify-content: space-between;
    }

    div:last-child {
      background-color: #fafafa;
    }

    div p:last-child {
      font-weight: bold;
      color: ${({ theme }) => theme.colors.heading};
    }
  }

  @media (max-width: ${({ theme }) => theme.media.mobile}) {
    .grid-five-column {
      grid-template-columns: 1.5fr 1fr 0.5fr;
    }
    .cart-hide {
      display: none;
    }

    .cart-two-button {
      margin-top: 2rem;
      display: flex;
      justify-content: space-between;
      gap: 2.2rem;
    }

    .order-total--amount {
      width: 100%;
      text-transform: capitalize;
      justify-content: flex-start;
      align-items: flex-start;

      .order-total--subdata {
        width: 100%;
        border: 0.1rem solid #f0f0f0;
        display: flex;
        flex-direction: column;
        gap: 1.8rem;
        padding: 3.2rem;
      }
    }
  }
`;

export default Cart;
