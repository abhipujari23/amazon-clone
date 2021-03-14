import React from 'react'
import './Home.css'
import Product from './Product'

function Home() {
    return (
        <div className="home">
            <div className="home__container">
                <img
                className="home__image"
                src="https://images-eu.ssl-images-amazon.com/images/G/31/img2020/fashion/WA_2020/StyleBazaar21/gateway/March/Revised/1500X600-federal-bank._CB658070911_.jpg"
                alt=""
                />

                <div className="home__row">
                    <Product title='The Lean Startup' 
                    price={750} 
                    image='https://images-na.ssl-images-amazon.com/images/I/51T-sMqSMiL._SY291_BO1,204,203,200_QL40_FMwebp_.jpg'
                    rating='3' />
                    <Product />
                </div>
                <div className="home__row">
                    <Product />
                    <Product />
                    <Product />
                </div>
                <div className="home__row">
                    <Product />
                </div>

            </div>
        </div>
    )
}

export default Home
