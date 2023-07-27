import React, { useState } from 'react';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './pages/Home';
import Footer from './components/Footer';
import Menu from './pages/Menu';
import Make from './pages/Make';
import About_us from './pages/About_us';
import ShoppingCart from './pages/ShoppingCart';
import Account from './pages/Account';
import './App.css';

function App() {
  const [showAccount, setShowAccount] = useState(false);

  const handleAccountClick = () => {
    console.log('Clicked on "My account" button');
    setShowAccount(!showAccount);
  };


  return (
    <div className="App">
      <Router>
        <Navbar onAccountClick={handleAccountClick} />
        <div className="containe">
          {showAccount && <Account onAccountClick={handleAccountClick} />}
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/menu" exact component={Menu} />
            <Route path="/make" exact component={Make} />
            <Route path="/about" exact component={About_us} />
            <Route path="/cart" exact component={ShoppingCart} />
          </Switch>
        </div>
        <Footer />
      </Router>
    </div>
  );
}

export default App;