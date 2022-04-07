import React from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import { BuyFlow } from './pages/buy-flow';
import { ProductIds, Products } from './config';
import { Home } from './pages/home';

const App = () => {
    return (
        <Router>
            <div className='App'>
                <header className='App-header'>
                    <Link to='/'>
                        <img src={logo} className='App-logo' alt='logo' />
                    </Link>
                </header>
                <Switch>
                    <Route path={Products.dev_ins.url} exact>
                        <BuyFlow productId={ProductIds.devIns} />
                    </Route>
                    <Route path={Products.design_ins.url} exact>
                        <BuyFlow productId={ProductIds.designIns} />
                    </Route>
                    <Route path='/' exact>
                        <Home />
                    </Route>
                </Switch>
            </div>
        </Router>
    );
};

export default App;
