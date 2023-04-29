import './HeaderMobi.css';
import './Menu.svg';

function HeaderMobi() {

    return (
        <header className="headerMobi">
            <div className='menuMobi displayRow mobiMenu'>
                <img src='../image/Menu.svg'/>
                <p className="pMenu">Меню</p>
            </div>
            <img src='../image/logo.svg' alt="logo" className="logoS" />
            <div className="cartHeader displayRow">
                    <img className="cartHeader" src="../image/bascket 1.png" alt="bascket" />
                    <p>(0)</p>
                </div>
        </header>
    )

}

export default HeaderMobi;