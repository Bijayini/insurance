import React from 'react'
import logo from './logo.svg'
import './App.css'
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'
import Buyflow from './buyflow/Buyflow'
import { ProductIds } from './config'

const App = () => {
  return (
    <Router>
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
        </header>
        <Switch>
          <Route path="/buy/insurance_dev">
            <Buyflow productId={ProductIds.devIns} />
          </Route>
          <Route path="/buy/insurance_design">
            <Buyflow productId={ProductIds.designIns} />
          </Route>
          <Route path="/">
            <p>Welcome to Getsafe's Developer Insurance</p>
            <Link to="/buy/insurance_dev">Get started!</Link>
            <p>Welcome to Getsafe's Designer Insurance</p>
            <Link to="/buy/insurance_design">Get started!</Link>
          </Route>
        </Switch>
      </div>
    </Router>
  )
}

export default App
