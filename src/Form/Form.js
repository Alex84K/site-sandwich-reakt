import './Form.css'

function Form() {

    return (
        <div className="form">
            <span className='textForForm'>
                <h2>Закажите свою запчасть</h2>
                <p className="txtMein pForm">Заполните поля с вашими данными и наш менеджер свяжется с вами для последующей консультации</p>
            </span>
            <div className="formIn">
                <div className="inputRow">
                    <input className="inp text-field__input" type="text" name="Name" id="login" placeholder="Name" />
                    <input className="inp text-field__input" type="text" name="Sity" id="login" placeholder="Sity" />
                    <input className="inp text-field__input" type="numer" name="Tel" id="login" placeholder="Tel" />
                    <button className="formButton">
                        <p className="txtMein txtButton">Выбрать шо-нибудь</p>
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Form;