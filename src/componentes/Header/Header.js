import React from "react";
import "./Header.css";

const Header = () => {
    return(
        <div className="div-header">
            <header className="header">
            <img src="/imagens/bitenergy.png" width={"20%"} height={"20%"} alt="Bit Energy"/>
        
            <ul className="menu">
                <li><a href="/">Quem somos</a></li>
                <li><a href="/">Soluções</a></li>
                <li><a href="/">Como funciona</a></li>
                <li><a href="/">Blog</a></li>
                <li><a href="/">Contato</a></li>
                <li>
                <button className="btn">SIMULADOR</button>
                </li>
            </ul>
            </header>
        </div>
    )
}

export default Header;