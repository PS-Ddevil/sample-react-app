import React from 'react';
import './App.css';
import { HashRouter, Switch, Route, BrowserRouter} from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';
import TopNavbar from './components/Layout/TopNavbar';
import Home from './components/pages/Home';
import About from './components/pages/About';

function App() {
  return (
    <HashRouter>
    <div className="App">
      <TopNavbar/>
      <Route exact path="/" component={Home} />
      <Route path="/about" component={About} />
    </div>
    </HashRouter>
  );
}

export default App;
