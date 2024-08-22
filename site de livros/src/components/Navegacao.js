import React from 'react'
import { NavLink } from 'react-router-dom';

//formataçao inline
let linkCorrente ={
    color:"#027399"
}



const Navegacao = () => {
    return(
        <ul>
            <li>
                <NavLink to = "/Home" style={linkCorrente}>Home</NavLink>
            </li>
            <li>
                <NavLink to = "/Frontend" style={linkCorrente}>Frontend</NavLink>
            </li>
            <li>
                <NavLink to = "/Programacao" style={linkCorrente}>Programacao</NavLink>
            </li>
            <li>
                <NavLink to = "/Design" style={linkCorrente}>Design</NavLink>
            </li>
            <li>
                <NavLink to = "/Catalogo" style={linkCorrente}>Catalogo</NavLink>
            </li>
        </ul>
    );
}
export default Navegacao;