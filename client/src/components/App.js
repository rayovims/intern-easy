import React from 'react';
import { Route, BrowserRouter } from 'react-router-dom';

import Header from '../components/header/Header';
import HMPortal from '../components/HMPortal/HMPortal';
import HRPortal from '../components/HRPortal/HRPortal';
import Login from '../components/login/Login';

//login page is going to be first

const App = () => {
    return (
        <div>
            <BrowserRouter>
            <div>
                <Header/>
                <div>
                    <Route path="/" exact render={() => <Login/>}/>
                    <Route path="/hmportal" render={() => <HMPortal/>}/>
                    <Route path="/hrportal" render={() => <HRPortal/>}/>
                </div>
            </div>
            </BrowserRouter>
        </div>
    )
}

export default App;