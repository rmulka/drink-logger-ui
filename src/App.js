import React from 'react';
import { BrowserRouter, Route, Link } from 'react-router-dom';

import Welcome from './components/Layout/public/Welcome';
import Secured from './components/Layout/secured/Secured';
import AuthProvider from './provider/AuthProvider';
import ProtectedRoute from './components/Auth/ProtectedRoute';
import Header from './components/Header/Header';
import './App.css';

function App() {
    return (
        <AuthProvider>
            <BrowserRouter>
                <div className="container">
                    <Header />
                    <ul>
                        <li><Link to="/">public component</Link></li>
                        <li><Link to="/secured">secured component</Link></li>
                    </ul>
                    <Route exact path="/" component={Welcome} />
                    <ProtectedRoute path="/secured" component={Secured} />
                </div>
            </BrowserRouter>
        </AuthProvider>
    )
}

export default App;
