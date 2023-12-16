import Section from './Section';
import {useState} from 'react';

export default function Calculator() {

    const [data, setData] = useState({
        homem: 0,
        mulher: 0,
        crianca: 0,
        resultado: null
    });

    const aumentarHomem = () => {
        setData((prevData) => ({...prevData, homem: data.homem + 1}));
    }

    const diminuirHomem = () => {
        if(data.homem > 0) {
            setData((prevData) => ({...prevData, homem: data.homem - 1}));
        }
    }

    const aumentarMulher = (evento) => {
        setData((prevData) => ({...prevData, mulher: data.mulher + 1}));
    }

    const diminuirMulher = () => {
        if(data.mulher > 0) {
            setData((prevData) => ({...prevData, mulher: data.mulher - 1}));
        }
    }

    const aumentarCrianca = (evento) => {
        setData((prevData) => ({...prevData, crianca: data.crianca + 1}));
    }

    const diminuirCrianca = () => {
        if(data.crianca > 0) {
            setData((prevData) => ({...prevData, crianca: data.crianca - 1}));
        }
    }

    const totalPessoas = () => {
        return `Há um total de ${data.homem + data.mulher + data.crianca} pessoa(s) no churrasco, 
        sendo ${data.homem} homem(ns), ${data.mulher} mulher(es) e ${data.crianca} criança(s).`
    }

    const handleClick = () => {
        setData((prevData) => ({...prevData, resultado: totalPessoas()}));
    }

    return (
        <div className="row">
            <div className="row-first">
            <Section label= "Homem" data={data.homem} onDataChangeMais = {aumentarHomem} onDataChangeMenos = {diminuirHomem} />
            <Section label= "Mulher" data={data.mulher} onDataChangeMais = {aumentarMulher} onDataChangeMenos = {diminuirMulher} />
            <Section label= "Criança" data={data.crianca} onDataChangeMais = {aumentarCrianca} onDataChangeMenos = {diminuirCrianca}/>        
        </div> 
            <div>
                <p id="invalid-input" style={{ visibility: "hidden" }}>Somente números!</p>
                <p id="no-input" style={{visibility: "hidden;"}}>Selecione a quantidade de pessoas!</p>
                <a href="/" className="default-button" onClick={handleClick}>Ir</a>
                <p>Resultado: {data.resultado}</p>
            </div>
        </div>

    )
}

