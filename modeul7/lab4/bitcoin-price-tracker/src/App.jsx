import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './components/Home';
import Login from './components/Login';
import BitcoinRates from './components/BitcoinRates';
import Navbar from './components/Navbar';
import { EmojiProvider } from './context/EmojiContext'; 

function App() {
  return (
    <EmojiProvider>
      <Router>
        <div className="App">
          <Navbar />
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/login" component={Login} />
            <Route path="/bitcoin-rates" component={BitcoinRates} />
          </Switch>
        </div>
      </Router>
    </EmojiProvider>
  );
}

export default App;
