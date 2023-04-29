import './HomePage.css';
import './stock1.png';
import './stock1.png';
import './stock2.png';

function HomePage() {
    return (
        <div className="mein HomePageDesctop">
            <div className='meinL'>
                <h1 className="hMobi">Лучшие запчасти <br /> для вашего авто</h1>
                <p className="txtMein txtOne">Вы не пожалеете о своём выборе используя наши услуги!</p>
                <button className="buttonBig">
                    <p className="txtMein txtButton">Выбрать шо-нибудь</p>
                </button>
            </div>
            <div className='meinR'>
                <img src='../image/stock2.png' alt="logo" className="meinImg1" />
                <img src='../image/stock1.png' alt="menu" className="meinImg2" />
            </div>
        </div>
    )
}

export default HomePage;