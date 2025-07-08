import { createContext, useReducer, useContext, useEffect } from "react";
import reducer from "../reducer/cartReducer";

const CartContext = createContext();

const getLocalCartData = () => {
    let newCart = localStorage.getItem("ShoppingCart");
    if( newCart === null ){
        return [];
    }else {
        return JSON.parse(newCart);
    }
};

const initialState = {
   //cart : [],
   cart: getLocalCartData(),
    total_item: "",
    total_price: "",
    shipping_fee: 50000,
}; 

export const CartProvider = ({children}) => {

    const [state, dispatch] = useReducer(reducer, initialState);


    //Add Product to Cart Page
    const addToCart = (id, color, amount, product) => {
            dispatch({type: "ADD_TO_CART", payload: {id, color, amount, product}});

    };

    const setDecrease = (id) => {
        dispatch ({type: "SET_DECREASE", payload: id});
    };

    const setIncrease = (id) => {
        dispatch ({type: "SET_INCREASE", payload: id});
    };

    //Remove the product from cart page

    const removeItem = (id) => {
        dispatch({type: "REMOVE_ITEM", payload: id });
    };

    const clearCart = () => {
        dispatch({type: "CLEAR_CART"});
    };

    //To add the Products into local Storage
    //get vs. set approach

    useEffect(() => {
        dispatch({type: "CART_TOTAL_ITEM"});
        dispatch({type: "CART_TOTAL_PRICE"});
        localStorage.setItem("ShoppingCart", JSON.stringify(state.cart));
    },[state.cart]);



    return <CartContext.Provider value={{ ...state, addToCart, removeItem, clearCart, setDecrease, setIncrease }}>
        {children}
    </CartContext.Provider>
}

export const useCartContext = () => {
    return useContext(CartContext);
} 
