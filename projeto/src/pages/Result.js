import { Link, useOutletContext } from 'react-router-dom';
import PrincipalTitle from '../components/PrincipalTitle';

const Result = () => {
    const [data] = useOutletContext()

    return (
        <div class="container">
        <PrincipalTitle/>
        <div class="calculator">
            <div>
                <div class="result-total-guest">
                    <p>Confira a lista</p>
                    <p id="total-guest">{data.resultado1} convidado(s)</p>
                    <span class="guest-list">{data.homem} homem(ns)</span>
                    <span class="guest-list">{data.mulher} mulher(es)</span>
                    <span class="guest-list">{data.crianca} criança(s)</span>
                </div>
                <div class="input-group-result">
                    <div id="header-result">
                        <p>ITEM</p>
                        <p>QUANTIDADE</p>
                    </div>
                    <ul class="results">
                        <li><strong>Carvão</strong><span>{(data.homem + data.mulher + data.crianca).toFixed(2)} kg</span></li>
                        <li><strong>Pão de Alho</strong><span>{(data.homem*2 + data.mulher*2 + data.crianca*1)} unidades</span></li>
                        <li><strong>Refrigerante</strong><span>1 garrafa de 2 L</span></li>
                        <li><strong>Água</strong><span>1 garrafa de 1 L</span></li>
                        <li><strong>Carne</strong><span> {(data.homem*0.4 + data.mulher*0.32 + data.crianca*0.2).toFixed(2)} kg</span></li>
                        <li><strong>Sal</strong><span>{(data.homem*0.04 + data.mulher*0.04 + data.crianca*0.04).toFixed(2)} kg</span></li>
                        <li><strong>Gelo</strong><span>5.00 kg</span></li>
                    </ul>
                </div>
            </div>
            <div class="row">
                <div>
                <Link to='/' className='default-button'>Calcular Novamente</Link> 
                </div>
            </div>
        </div>
        </div>
        
    )
}

export default Result;