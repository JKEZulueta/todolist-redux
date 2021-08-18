import './App.css';
import {Route, Link, BrowserRouter, Switch} from "react-router-dom"
import TodoList from './features/todos/components/TodoList';
import React from 'react';
import NotFoundPage from './features/notfound/NotFoundPage';
import DoneListContainer from './features/todos/components/DoneListContainer';
import { PlusSquareOutlined, CheckSquareOutlined } from '@ant-design/icons';
import { Menu } from 'antd';


function App() {
<div>
  @import url(http://fonts.googleapis.com/css?family=Satisfy);
</div>

  return (
    <React.Fragment>
      <BrowserRouter>

      <Menu mode="horizontal">

      <Menu.Item icon={<PlusSquareOutlined />}><Link to="/">Add to List</Link></Menu.Item>
      <Link to="/done">Finished List</Link>
      

      </Menu>
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
