import './Cart.css';
import slide1 from '../Slider/Img/slide1.jpg';
import slide2 from '../Slider/Img/slide2.jpg';
import slide3 from '../Slider/Img/slide3.jpg';
import slide4 from '../Slider/Img/slide4.jpg';
import slide5 from '../Slider/Img/slide5.jpg';

import cartArr from '../data/cartobj.json';
import { useState } from 'react';

const img = [
    <img key={slide1} src={slide1} />,
    <img key={slide2} src={slide2} />,
    <img key={slide3} src={slide3} />,
    <img key={slide4} src={slide4} />,
    <img key={slide5} src={slide5} />,
]

function Cart() {
    //console.log(cartArr);

    let [datai, setDatai] = useState(cartArr[0].title);

    function rrr() {
        setDatai(cartArr[5].title);
    }


    return (
        <div className='cart'>
            <img src={slide2} className='imgCart' />
            <div className='cartFooter'>
                <div className='texFoter'>
                    <p className='cartH'>Фильтры и масла</p>
                    <p className='cartTxt'>{datai}</p>
                </div>
                <img src='./image/buttonCart.png' className="cartButton" onClick={rrr} />
            </div>
        </div>
    )
}

export default Cart;