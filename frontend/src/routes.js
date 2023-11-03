import React from 'react';
import { BrowserRouter, Routes as Router, Route } from 'react-router-dom';
import Logon from './pages/Logon';
import Register from './pages/Register';
import Profile from './pages/Profile';
import NewIncident from './pages/NewIncident';

//Function to create routes of application
function Routes() {
    return(
        <BrowserRouter>
            <Router>
                <Route exact path="/" element={<Logon />} />
                <Route exact path="/register" element={<Register />} />
                <Route exact path="/profile" element={<Profile />} />
                <Route exact path="/incidents/new" element={<NewIncident />} />
            </Router>
        </BrowserRouter>
    );
}

export default Routes;