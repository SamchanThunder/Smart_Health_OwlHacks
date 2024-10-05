import '../style_sheets/Header.css';
import base from '../images/base.svg';
import logo from '../images/Canva_Logo.svg.png';

export function Header(){
    return(
        <header id="webHeader" data-visible-range="0">
            <div id="logoBox"><button id="logo"><img src={logo} style={{width: "150px", height: "50px"}}></img></button></div>
            <div id="rightHeaderButtons">
                <button id="rhButton1"><img src={base}></img></button>
                <button id="rhButton2"><img src={base}></img></button>
                <button id="rhButton3">Contact</button>
            </div>
        </header>
    );
}