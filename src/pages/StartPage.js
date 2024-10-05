import '../style_sheets/StartPage.css';
import logo from '../images/logo.png';
export function StartPage(){
    return(
        <div className="startPageContent">
            <div className="Compare">
                <div id="SubCompare">
                    <img id="LogoImg" src={logo}></img>
                    <div id="SubText">Affordable Healthcare at your Fingertips</div>
                    <div id="CompareButtonContainer">
                        <button id="CButton1">Start Now</button>
                        <button id="CButton2">Quick Compare</button>
                    </div>
                </div>
            </div>
        </div>
    );
}
