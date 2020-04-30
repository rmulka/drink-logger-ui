import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { MuiThemeProvider } from '@material-ui/core/styles'

import AuthProvider from './provider/AuthProvider';
import muiTheme from './config/drinkLoggerTheme';
import Layout from './components/Layout/Layout';

import './App.css';

function App() {
    return (
        <AuthProvider>
            <MuiThemeProvider theme={muiTheme}>
                <BrowserRouter>
                    <div className='container'>
                        <Layout />
                    </div>
                </BrowserRouter>
            </MuiThemeProvider>
        </AuthProvider>
    )
}

export default App;
