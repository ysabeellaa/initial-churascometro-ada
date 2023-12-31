import { Link, useOutletContext } from 'react-router-dom';
import PrincipalTitle from '../components/PrincipalTitle';
import SecondTitle from '../components/SecondTitle';
import Section from '../components/Section';
import PropTypes from 'prop-types';


const Guest = () => {

    const [data, setData] = useOutletContext()
    
    const diminuirHomem = () => {
        if(data.homem > 0) {
            setData((prevData) => ({...prevData, homem: data.homem - 1}));
        }
    }
    const diminuirMulher = () => {
        if(data.mulher > 0) {
            setData((prevData) => ({...prevData, mulher: data.mulher - 1}));
        }
    }

    const diminuirCrianca = () => {
        if(data.crianca > 0) {
            setData((prevData) => ({...prevData, crianca: data.crianca - 1}));
        }
    }

    
    const aumentarHomem = () => {
        setData((prevData) => ({...prevData, homem: data.homem + 1}));
    }

    const aumentarMulher = (evento) => {
        setData((prevData) => ({...prevData, mulher: data.mulher + 1}));
    }

    const aumentarCrianca = (evento) => {
        setData((prevData) => ({...prevData, crianca: data.crianca + 1}));
    }

    const totalPessoas = () => {
        return `${data.homem + data.mulher + data.crianca}`
    }


    const handleClick = () => {
        setData((prevData) => ({...prevData, resultado1: totalPessoas()}));
    }

    aumentarHomem.prototype = {
        homem: PropTypes.number.isRequired
    }

    diminuirHomem.prototype = {
        homem: PropTypes.number.isRequired
    }

    aumentarMulher.prototype = {
        mulher: PropTypes.number.isRequired
    }
    
    diminuirMulher.prototype = {
        mulher: PropTypes.number.isRequired
    }

    aumentarCrianca.prototype = {
        crianca: PropTypes.number.isRequired
    }

    diminuirCrianca.prototype = {
        crianca: PropTypes.number.isRequired
    }

    return (
    
        <div className="row">

            <PrincipalTitle/>
            <SecondTitle/>
            <div className="row-first">
                <Section label= "Homem" data={data.homem} onDataChangeMais = {aumentarHomem} onDataChangeMenos = {diminuirHomem} />
                <Section label= "Mulher" data={data.mulher} onDataChangeMais = {aumentarMulher} onDataChangeMenos = {diminuirMulher} />
                <Section label= "Criança" data={data.crianca} onDataChangeMais = {aumentarCrianca} onDataChangeMenos = {diminuirCrianca}/>        
            </div> 
        <div>
            <p id="invalid-input" style={{ visibility: "hidden" }}>Valido somente números!</p>
            <p id="no-input" style={{visibility: "hidden;"}}>Selecione a quantidade de pessoas!</p>
            <Link to="/register" className="default-button" onClick={handleClick}>Ir</Link>
            
        </div>
    </div>
    
    )
}

export default Guest;