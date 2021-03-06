import React from 'react'
import "./Home.css"
import Product from './Product'

export default function Home() {
    return (
        <div className="home">
            <div className="home__container">
            <img 
            className="home__image" 
            src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg"></img>
           
           <div className="home__row">
            <Product title="The lean startup" price={29.99} 
            image='https://m.media-amazon.com/images/P/0670921602.01._SCLZZZZZZZ_SX500_.jpg' 
             rating={4}   
            />
           <Product title="The lean startup" price={29.99} 
            image='https://m.media-amazon.com/images/P/0670921602.01._SCLZZZZZZZ_SX500_.jpg' 
             rating={4}   
            />

           </div>

           <div className="home__row">
           <Product title="The lean startup" price={29.99} 
            image='https://m.media-amazon.com/images/P/0670921602.01._SCLZZZZZZZ_SX500_.jpg' 
             rating={4}   
            />
            <Product title="The lean startup" price={29.99} 
            image='https://m.media-amazon.com/images/P/0670921602.01._SCLZZZZZZZ_SX500_.jpg' 
             rating={4}   
            />
            <Product title="The lean startup" price={29.99} 
            image='https://m.media-amazon.com/images/P/0670921602.01._SCLZZZZZZZ_SX500_.jpg' 
             rating={4}   
            />
           
           


           </div>

           <div className="home__row">
           <Product title="The lean startup" price={29.99} 
            image='https://m.media-amazon.com/images/P/0670921602.01._SCLZZZZZZZ_SX500_.jpg' 
             rating={4}   
            />

           </div>
            </div>

        </div>
    )
}
