import '../style_sheets/StartPage.css';
import logo from '../images/logo.png';
import { Navigate } from '../scripts/navigate';

export function StartPage(){
    const { newPage } = Navigate();
    
    return(
        <div className="startPageContent">
            <div className="Compare">
                <div id="SubCompare">
                    <img id="LogoImg" src={logo}></img>
                    <div id="SubText">Affordable Healthcare at your Fingertips</div>
                    <div id="CompareButtonContainer">
                        <button id="CButton1" onClick={() => newPage("/Smart_Health_OwlHacks/prices")}>Start Now</button>
                        <button id="CButton2">Quick Compare</button>
                    </div>
                </div>
            </div>
        </div>
    );
}
