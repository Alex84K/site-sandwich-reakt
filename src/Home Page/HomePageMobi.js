import './HomePageMobi.css';

function HomePageMobi() {
    return (
        <div className='HomePageMobis'>
            <h2>Лучшие запчасти для вашего авто!</h2>
            <p className='txtMein txtOne pText'>Вы не пожалеете о своём выборе
                используя наши услуги!</p>
                <button className="buttonBig butMobi">
                    <p className="txtMein txtButton">Выбрать шо-нибудь</p>
                </button>
                <img src='../image/stock2.png' alt="logo" className="meinImg1 img1mobi" />
                <img src='../image/stock1.png' alt="menu" className="meinImg2 img2mobi" />
        </div>
    )
}

export default HomePageMobi;