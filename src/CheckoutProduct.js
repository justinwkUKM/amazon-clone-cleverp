import React from 'react'
import "./CheckoutProduct.css"
import { useStateValue } from './StateProvider'

function CheckoutProduct({id, title, image, price, rating}) {

    const [{basket}, dispatch] = useStateValue();
    // console.log(id, title, image, price, rating)
    const removeFromBasket = () => {
        dispatch(
            {
                type: "REMOVE_FROM_BASKET",
                id:id,
            }
        )
    }

    return (
        <div className="checkoutProduct">
            <img src={image} alt="" className="checkoutProduct__image"/>
            
            <div className="checkoutProduct__info">
                <p className="checkoutProduct__title">{title}</p>
                <p className="checkoutProduct__price">
                    <small>RM</small>
                    <strong>{price}</strong>
                </p>
                <div className="checkoutProduct__rating">
                    {
                        Array(rating)
                        .fill()
                        .map((_) => (
                            <p><span role="img" aria-label="jsx-a11y/accessible-emoji">⭐</span></p>
                        ))
                    }
                </div>
                <button onClick={removeFromBasket} className="checkoutProduct__button">Remove from Basket</button>
            </div>
        </div>
    )
}

export default CheckoutProduct
