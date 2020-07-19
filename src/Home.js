import React from 'react'
import "./Home.css"
import Product from './Product'

function Home() {
    return (
        <div className="home">
            <img
                className="home__image"
                src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg"
                alt="home"
            >

            </img>

            <div className="home__row">
                {/* Product id, title, price, rating, image */}
                <Product 
                    id="123456"
                    title="EASELAND Soft Queen Size Blanket Warm Fuzzy Microplush Lightweight Thermal Fleece Blankets for Couch Bed Sofa 90x90 Inch,Washed Blue"
                    price={12.98}
                    rating={5}
                    image="https://images-na.ssl-images-amazon.com/images/I/61t4Syo71BL._AC_SL1100_.jpg"
                    >
                </Product>
                <Product 
                    id="123457"
                    title="USB Condenser Microphone, IKEDON 192KHZ/24Bit Plug & Play PC Streaming Mic, USB Microphone Kit with Professional Sound Chipset Boom Arm Set, Studio Cardioid Mic for Recording YouTube Gaming Podcasting"
                    price={50.99}
                    rating={5}
                    image="https://images-na.ssl-images-amazon.com/images/I/71r9i6EEGLL._AC_SL1500_.jpg"
                    >
                </Product>
            </div>
            <div className="home__row">
                {/* Product id, title, price, rating, image */}
                <Product 
                    id="123458"
                    title="TP-Link AC750 WiFi Extender | Covers Up to 1200 Sq.ft and 20 Devices Up to 750Mbps| Dual Band WiFi Range Extender"
                    price={29.98}
                    rating={5}
                    image="https://images-na.ssl-images-amazon.com/images/I/61xNxQEJfkL._AC_SL1500_.jpg"
                    >
                </Product>
                <Product 
                    id="123459"
                    title="HP VH240a 23.8-inch Full HD 1080p IPS LED Monitor with Built-in Speakers and VESA Mounting, Rotating Portrait & Landscape"
                    price={114.98}
                    rating={5}
                    image="https://images-na.ssl-images-amazon.com/images/I/71trhuzbhML._AC_SL1500_.jpg"
                    >
                </Product>
                <Product 
                    id="123450"
                    title="Acer Aspire 5 Slim Laptop, 15.6 inches Full HD IPS Display, AMD Ryzen 3 3200U, Vega 3 Graphics"
                    price={349.98}
                    rating={5}
                    image="https://images-na.ssl-images-amazon.com/images/I/71vvXGmdKWL._AC_SL1500_.jpg"
                    >
                </Product>
            </div>
            
            <div className="home__row">
                {/* Product id, title, price, rating, image */}
                <Product 
                    id="123456"
                    title="WD 12TB Elements Desktop Hard Drive, USB 3.0 - WDBWLG0120HBK-NESN"
                    price={219.99}
                    rating={4}
                    image="https://images-na.ssl-images-amazon.com/images/I/716SVGVhQML._AC_SX679_.jpg"
                    >
                </Product>
            </div>
            


        </div>
    )
}

export default Home
