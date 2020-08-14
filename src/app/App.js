import React, {Component} from 'react';
import './app.less';
import {Route, BrowserRouter, Switch} from "react-router-dom";
import Home from "./component/Home/Home";
import Header from "./component/Header/Header";
import Order from "./component/Order/Order";
import Add from "./component//Add/Add";
class App extends Component {
  render() {
    return (
      <div className="app">
        <BrowserRouter>
        <Header />
        <Switch>
          <Route exact path='/' component={Home}/>
          <Route exact path='/order' component={Order}/>
          <Route exact path='/add' component={Add}/>
        </Switch>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
