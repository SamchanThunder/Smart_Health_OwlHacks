import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import { Header } from '../pages/Header.js';
import { StartPage } from '../pages/StartPage.js';
import { HealthScreening } from '../pages/HealthScreening.js';
import { Marketplace } from '../pages/marketplace.js';
import { Compare } from '../pages/Compare.js';

export function RouteFunction(){
    return(
        <Router>
            <Header />
            <Routes>
                <Route path="/Smart_Health_OwlHacks" element={<StartPage />}/>
                <Route path="/Smart_Health_OwlHacks/healthscreening" element={<HealthScreening/>}/>
                <Route path="/Smart_Health_OwlHacks/prices" element={<Marketplace/>}/>
                <Route path="/Smart_Health_OwlHacks/compare" element={<Compare/>}/>
            </Routes>
        </Router>
    )
}