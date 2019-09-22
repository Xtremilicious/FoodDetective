import React from 'react';
import './App.css';
import {Switch, Route} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Testing from './components/Testing';
import Locate from './components/Locate';
import Valid from './components/Valid';
import Extra from './components/Extra';


function App() {
  return (
    <React.Fragment>
      <Navbar />
      <Switch>
      <Route exact path='/' component={Home}></Route>
      <Route path='/testing' component={Testing}></Route>
      <Route path='/locate' component={Locate}></Route>
      <Route path='/validity' component={Valid}></Route>
      <Route path='/extra' component={Extra}></Route>
      </Switch>
    </React.Fragment>

  );
}

export default App;

