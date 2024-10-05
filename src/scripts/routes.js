import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import { StartPage } from '../pages/StartPage.js';
import { HealthScreening } from '../pages/HealthScreening.js';
import { Marketplace } from '../pages/marketplace.js';

export function RouteFunction(){
    return(
        <Router>
            <Routes>
                <Route path="/Smart_Health_OwlHacks" element={<StartPage />}/>
                <Route path="/Smart_Health_OwlHacks/healthscreening" element={<HealthScreening/>}/>
                <Route path="/Smart_Health_OwlHacks/marketplace" element={<Marketplace/>}/>
            </Routes>
        </Router>
    )
}