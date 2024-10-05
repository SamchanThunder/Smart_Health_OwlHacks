import '../style_sheets/Header.css';
import pencil from '../images/pencil.svg';
import logo from '../images/Canva_Logo.svg.png';

export function Header() {
    return (
        <header id="webHeader" data-visible-range="0">
            <div id="logoBox">
                <button id="logo">
                    <img src={logo} style={{ width: "170px", height: "40px" }} alt="Logo" />
                </button>
            </div>
            <div id="buttonContainer">
                <button id="firstButton">DRUGS</button>
                <button id="secondButton">SCREENING</button>
            </div>
            <div>
                <button id="rhButton">
                    <div id="rhText">CONTACT US</div>
                    <div id="rhImage">
                        <img id="pencil" src={pencil} alt="Pencil Icon" />
                    </div>
                </button>
            </div>
        </header>
    );
}
