import React, { useEffect, useState } from 'react';
import logo from '../logo.svg';
import '../App.css';



function Header(props){


// estado é informação armazenada
//em react as informações saõ imutáveis
//tem q ter getter e setter
// 16.8 - Hooks - useAlgumaCoisa, use State, useEffect. useEffect, use Ref, useContext
// const [getter, setter] = useState(valor inicial);

const [company, setCompany] = useState(props.options.empresa || "Nenhuma informada");

const[name, setName] = useState(props.options.nome || "Nenhum informado");

const[site, setSite] = useState(props.options.site || "Nenhum informado");


useEffect(()=>{
    setCompany(company.toUpperCase());
},[company]);

//HOOK que execiuta automaticamente toda vez que a página é carregada - componentDidMount()
// Executa automaticamente toda vez que um estado é alterado - componentDidUpdate()





return(
    <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>{props.title}</p>
        <a 
        className={props.options.className} 
        href={props.options.site} 
        target="_blank" 
        rel="noopener noreferrer" 
        > 
        {company}
        {name}
        </a>
        <button onClick={(e)=>setCompany("Avanade")}>
        {`Mudando o nome de: ${company}`}</button>
    </header>

);

}

export default Header;