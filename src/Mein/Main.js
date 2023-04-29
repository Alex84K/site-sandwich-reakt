import Header from "../Header/Header";
import HomePage from "../Home Page/HomePage";
import Carousel from "../Carousel/Carousel";
import Form from "../Form/Form";
import HeaderMobi from "../Header/HeaderMobi";
import './Main.css';
import HomePageMobi from "../Home Page/HomePageMobi";

function Mein() {
    return (
        <div className="main">
            <Header className='headerDesctop'/>
            <HeaderMobi/>
            <HomePage className='HomePageDesctop'/>
            <HomePageMobi/>
            <Carousel />
            <Form />
        </div>
    )

}

export default Mein;