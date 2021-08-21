import React from 'react';
import ReactDOM from 'react-dom';
import {Route, Link} from 'react-router-dom'
import Home from './components/Home'
import Counter from './components/Counter'
import { ConnectedRouter } from "./connected-react-router";
import history from "./history";
import { Provider } from "react-redux";
import store from "./store";
ReactDOM.render(
  <Provider store={store}>
    <ConnectedRouter history={history}>
    <div>
      <ul>
        <li><Link to="/" exact={true}>首页</Link></li>
        <li><Link to="/counter" exact={true}>计数器</Link></li>
      </ul>
      <Route path="/" exact={true} component={Home} ></Route>
      <Route path="/counter"  component={Counter} ></Route>
    </div>
  </ConnectedRouter>
  </Provider>,
  document.getElementById('root')
);


