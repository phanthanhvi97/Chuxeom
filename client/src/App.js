import React, { Component } from 'react';
import main_khach from './components/khach/main_khach';
import Khach_Login from './components/khach/khach_login';
import trothanhdoitac from './components/khach/trothanhdoitac'
import vechungtoi from './components/khach/vechungtoi'
import login from './components/login'
import { Route, Switch } from "react-router-dom";
import taixe_login from './components/taixe/taixe_login'
import admin_login from './components/admin/admin_login'
import khachdoimatkhau from './components/khach/khachdoimatkhau'
class App extends Component {
  render() {
    return (
      <div>
        <Switch>
          <Route path='/' exact component={login} />
          <Route path='/main_khach' exact component={main_khach} />
          <Route path='/main_khach/khachdoimatkhau' exact component={khachdoimatkhau} />
          <Route path='/khach_login' exact component={Khach_Login} />
          <Route path='/taixe_login' exact component={taixe_login} />
          <Route path='/admin_login' exact component={admin_login} />
          <Route path='/main_khach/trothanhdoitac' exact component={trothanhdoitac} />
          <Route path='/main_khach/vechungtoi' exact component={vechungtoi} />
        </Switch>
      </div>
    )
  }
}

export default App; 
