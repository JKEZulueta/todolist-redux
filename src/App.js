import './App.css';
import {Route, Link, BrowserRouter, Switch} from "react-router-dom"
import TodoList from './features/todos/components/TodoList';
import React from 'react';
import NotFoundPage from './features/notfound/NotFoundPage';
import DoneListContainer from './features/todos/components/DoneListContainer';
import { Breadcrumb, Alert } from 'antd';


function App() {
<div>
  @import url(http://fonts.googleapis.com/css?family=Satisfy);
</div>

  return (
    <React.Fragment>
      <BrowserRouter>
      <ul className="app-list">
        <li><Link to="/">Add to List</Link></li>
        <li><Link to="/done">Finished List</Link></li>
      </ul>
      
      <Switch>
        <Route exact path="/" component={TodoList}></Route>
        <Route exact path="/done" component={DoneListContainer}></Route>
        <Route path='*' component={NotFoundPage}></Route>
      </Switch>
      </BrowserRouter>
      
      </React.Fragment>
  );
}

export default App;
