import React from 'react'
import "./Checkout.css"
import { useStateValue } from './StateProvider'
import CheckoutProduct from './CheckoutProduct';
import Subtotal from './Subtotal';

function Checkout() {
    const [{basket},] = useStateValue();
    return (
        <div className="checkout">
            <div className="checkout__left">

                
                <img className="checkout__ad" src="https://images-na.ssl-images-amazon.com/images/G/02/UK_CCMP/TM/OCC_Amazon1._CB423492668_.jpg" alt="checkout_ad"></img> 
            
            
                {basket?.length===0 ?(
                <div>
                    <h2 className="checkout__title">Empty Basket</h2>
                    <p>You have no items in the basket</p>
                </div>   
                ) : (
                    
                <div>
                    <h2 className="checkout__title">Filled Basket</h2>
                    {
                        basket.map((item) => {
                            return(
                            <CheckoutProduct
                                id={item.id}
                                title={item.title}
                                image={item.image}
                                price={item.price}
                                rating={item.rating}
                            />
                        )})
                    }
                </div>   
                )
            }

            </div>
        {basket.length > 0 &&(
            <div className="checkout__right">
                <Subtotal></Subtotal>
                {/* <h1>Subtotal</h1> */}
            </div>
        )}
        </div>
        
    );
}

export default Checkout
