import React, { Component } from 'react';
import main_khach from './components/khach/main_khach';
import login from './components/login';
import trothanhdoitac from './components/khach/trothanhdoitac'
import vechungtoi from './components/khach/vechungtoi'

import { Route, Switch } from "react-router-dom";
class App extends Component {
  render() {
    return (
      <div>
        <Switch>
          <Route path='/main_khach' exact component={main_khach} />
          <Route path='/' exact component={login} />
          <Route path='/main_khach/trothanhdoitac' exact component={trothanhdoitac}/>
          <Route path='/main_khach/vechungtoi' exact component={vechungtoi}/>
        </Switch>
      </div>
    )
  }
}

export default App; 
