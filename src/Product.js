import React from 'react'
import "./Product.css"
import {useStateValue} from "./StateProvider"
function Product({id, title, price, rating, image}) {
    const [, dispatch] = useStateValue();
    const addToBasket = () => {
        dispatch({
            type: 'ADD_TO_BASKET',
            item: {
                id: id,
                title: title,
                image: image,
                price: price,
                rating: rating,
            }
         }
        )
    }
    
    return (
        <div className='product'>
            <div className="product__info">
                <p>{title}</p>
                <p className="product__price">
                    <small>RM</small>
                    <strong>{price}</strong>
                </p>
                <div className="product__rating">
                    {
                        Array(rating)
                        .fill()
                        .map((_) => (
                            <p><span role="img" aria-label="jsx-a11y/accessible-emoji">⭐</span></p>
                        ))
                    }
                </div>
            </div>
            
            <img src={image} alt=""></img>
            <button onClick={addToBasket}>Add to Basket</button>
            
        </div>
    )
}

export default Product
