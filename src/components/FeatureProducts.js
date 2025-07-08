import styled from "styled-components";
import { useAppContext } from "../context/productcontext";
import Product from "./Product";





const FeatureProducts = () => {
    const {isLoading, featureProducts} = useAppContext();
       
    

    if (isLoading) {
        return <div>.....Loading</div>;
    }
  return (
  
  <Wrapper className="section">
        <div className="container">
            <div className="intro-data">Check Now!</div>
            <div className="common-heading">Our Featured Services</div>
            <div className="grid grid-three-column">
                 {
                    featureProducts.map((curElem) => {
                        return  <Product key={curElem.id}{...curElem}/>;
                        
                    })
                } 
                    
                
            </div>
        </div>

    </Wrapper> 

    );
};

const Wrapper = styled.section`

    padding: 9rem 0;
    background-color: ${({theme}) => theme.colors.bg};

    .container {
        max-width: 120rem;
    }

    figure {
        width: auto;
        display: flex; 
        justify-content: center;
        align-items: center;
        position: relative;
        overflow: hidden;
        transition: all 0.5s linear;

        &::after {
            content: "";
            position: absolute;
            top: 0;
            left: 0;
            width: 0%;
            height: 100%;
            background-color: rgba(0, 0, 0, 0.5);
            transition: all 0.2s linear;
            cursor: pointer;
        }

        &:hover::after {
            width: 100%;
        }

        &:hover img {
        transform: scale(1.4);
        
        }

        img {
          max-width: 90%;
          margin-top: 1.4rem;
          height: 20rem;
          transition: all 0.2s linear; 
        }

        .caption{
            position: absolute;
            top: 15%;
            right: 10%;
            text-transform: uppercase;
            padding: 0.8rem 2rem;
            font-size: 1.2rem;
            border-radius: 2rem;
        }


    }

    .card {
        background-color: #fff;
        border-radius: 1rem;

        .card-data{
            padding: 0 2rem;
        }
    }

    .card-data-flex {
           margin: 2rem 0;
           display: flex;
           justify-content: space-between;
           align-items: center;
    }

     h3 {
           color: #14213d;
           text-transform: capitalize;       
        }
    .card-data--price {
            color: #14213d;
        }

    .btn {
            margin: 2rem auto;
            background-color: rgb(0, 0, 0, 0%)
            border: 0.1rem solid rgb(98, 84, 248);
            display: flex;
            justify-content: center;
            align-items: center;

            &:hover {
                background-color: rgb(98, 84, 243); 
            }

            &:hover {
                color: #fff;
            }
            
            a {
                color: rgb(98, 84, 243);
                font-size: 1.4rem;
            }
        }



`;

export default FeatureProducts;