import React from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Buyflow from './buyflow/Buyflow';
import { ProductIds } from './config';
import { Home } from './pages/home';

const App = () => {
    return (
        <Router>
            <div className='App'>
                <header className='App-header'>
                    <img src={logo} className='App-logo' alt='logo' />
                </header>
                <Switch>
                    <Route path='/buy/insurance_dev'>
                        <Buyflow productId={ProductIds.devIns} />
                    </Route>
                    <Route path='/buy/insurance_design'>
                        <Buyflow productId={ProductIds.designIns} />
                    </Route>
                    <Route path='/'>
                        <Home />
                    </Route>
                </Switch>
            </div>
        </Router>
    );
};

export default App;
