import React from "react";
import "./Header.css";

const Header = () => {
    return(
        <div className="header">
            <h1>
            <img src="/imagens/bitenergy.png" alt="Bit Energy"/>
            </h1>
            <ul>
                <li>Quem Somos</li>
                <li>Soluções</li>
                <li>Como Funciona</li>
                <li>Blog</li>
                <li>Contato</li>
            </ul>
        </div>
    )
}

export default Header;