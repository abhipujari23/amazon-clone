import React from 'react'
import './Product.css'

function Product({title, image, price, rating}) {
    return (
        <div className="product">
            <div className="product__info">
                <p>{title}</p>
                <p className="product__price">
                    <small>₹</small>
                    <strong>{price}</strong>
                </p>
                <div className="product__rating">
                    {Array(rating).fill()
                    .map((_, i )=>(
                        <p>⭐</p>
                    ))}
                </div>
            </div>
                <img src="https://images-na.ssl-images-amazon.com/images/I/51T-sMqSMiL._SY291_BO1,204,203,200_QL40_FMwebp_.jpg" 
                   alt="the lean start"
                />

                <button>Add to Basket</button>
        </div>
    )
}

export default Product
