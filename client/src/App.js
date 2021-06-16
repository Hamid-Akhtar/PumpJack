import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom'
import { Login } from './login';
import { Product } from './product';
import { User } from './User';

import './App.css';


class App extends Component {
  render() {
    return (  
      <div>
      <Switch>
      <Route exact path='/' component={Login}/>
        <Route exact path='/products' component={Product}/>
        <Route exact path='/user' component={User}/>
      </Switch>  
      </div>
    );
  }
}

export default App;