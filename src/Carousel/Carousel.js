import React from 'react';
import './Carousel.css';
import '../Carousel/image/ArrowL.png';
import '../Carousel/image/ArrowR.png';

import './image/slide1.jpg';
import './image/slide2.jpg';
import './image/slide3.jpg';

import cartArr from '../data/cartobj.json';
import { useState } from 'react';

let cartOne = new Object();
let newCart = new Object();
cartOne = cartArr.slice(0, 3);


function Carousel() {

    const [counte, setCount] = useState(cartOne.map((el, index) => (
        <div className='cart' key={index}>
            <img src={el.image} className='imgCart' style={{ backgroundColor: el.color }} />
            <div className='cartFooter'>
                <div className='texFoter'>
                    <p className='cartH'>{el.title}</p>
                    <p className='cartTxt'>{el.cost}</p>
                </div>
                <img src='./image/buttonCart.png' className="cartButton" />
            </div>
        </div>
    )));

    function r() {

        newCart = cartArr.slice(3, 6);
        setCount(
            newCart.map((el, index) => (
                <div className='cart' key={index}>
                    <img src={el.image} className='imgCart' style={{ backgroundColor: el.color }} />
                    <div className='cartFooter'>
                        <div className='texFoter'>
                            <p className='cartH'>{el.title}</p>
                            <p className='cartTxt'>{el.cost}</p>
                        </div>
                        <img src='./image/buttonCart.png' className="cartButton" />
                    </div>
                </div>
            )));
    }

    function l() {
        setCount(
            cartOne.map((el, index) => (
                <div className='cart' key={index}>
                    <img src={el.image} className='imgCart' style={{ backgroundColor: el.color }} />
                    <div className='cartFooter'>
                        <div className='texFoter'>
                            <p className='cartH'>{el.title}</p>
                            <p className='cartTxt'>{el.cost}</p>
                        </div>
                        <img src='./image/buttonCart.png' className="cartButton" />
                    </div>
                </div>
            ))
        );
    }


    return (
        <div className="carouselOut">
            <div className="carouselIn">
                <div className='carouseleHeader displayRow'>
                    <h2>Выберите товар</h2>
                    <div className="arrowTwo displayRow">
                        <img src='./image/ArrowL.png' className="arL" onClick={l} />
                        <img src='./image/ArrowR.png' className="arR" onClick={r} />
                    </div>
                </div>
                <div className='carouselMein'>
                    {counte}
                </div>
                <div className='indicatorOut'>
                    <div className='indicatorIn'>
                        <div className='indicators'></div>
                        <div className='indicators indicatorsAktiv'></div>
                        <div className='indicators'></div>
                        <div className='indicators'></div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Carousel;