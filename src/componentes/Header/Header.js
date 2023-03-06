import React from "react";
import "./Header.css";

const Header = () => {
    return(
    <div className="menu-bg">
        <img className="menu-logo" src="/imagens/bitenergy.png" alt="Bit Energy"/>
        <div className="menu">
            <nav className="menu-nav">
                <ul>
                    <li><a href="/">Quem Somos</a></li>
                    <li><a href="/">Soluções</a></li>
                    <li><a href="/">Como Funciona?</a></li>
                    <li><a href="/">Blog</a></li>
                    <li><a href="/">Contato</a></li>
                    <li><a class="active" href="/">SIMULADOR</a></li>
                </ul>
            </nav>
        </div>
    </div>
    )
}

export default Header;