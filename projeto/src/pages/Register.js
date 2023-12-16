import { Link } from "react-router-dom";

const Register = () => {
    return (
        <div class="container">
                <h1>Churrascômetro da galera</h1>
                <div class="calculator">
                    <div class="row">
                        <div class="input-form-group">
                            <p id="header-form">Cadastre seu e-mail e receba promoções especiais!</p>
                            <form>
                                <input type="text" id="name" placeholder="Digite seu nome" class="input-form" required/>
                                <p id="invalid-name">Insira um nome válido!</p>
                                <input type="email" id="email" placeholder="Digite seu email" class="input-form" required/>
                                <p id="invalid-email">Insira um e-mail válido!</p>
                                <input type="number" id="postal-code" placeholder="Digite seu CEP" class="input-form" required/>
                                <p id="error-postal-code">Insira um CEP válido!</p>
                                <Link to="/result" class="default-button" >Cadastrar</Link>
                            
                            </form>
                            <div id="consent-input">
                                <input type="checkbox" id="consent-checkbox" name="consentInput" checked="checked"/>
                                <label htmlFor="consent-checkbox" id="consent-label">Concordo em receber comunicações e ofertas personalizadas de acordo com meus interesses.</label>
                            </div>
                        </div>
                    </div>
                    <div class="row">
                        <div id="nav-container">
                            <Link to="/">
                                <button id="back-nav">Voltar</button>
                            </Link>
                            <Link to="/result">
                                <button id="skip-register">Pular</button>
                            </Link>
                            
                        </div>
                    </div>
                </div>
                <div class="theme-container">
                    <label id="label-theme-text" for="input-theme">Tema Escuro</label>
                    <label class="switch">
                        <input type="checkbox" id="input-theme" checked="checked"/><span class="slider">
                        </span>
                    </label>
                </div>
            </div>
    )
}


export default Register;

