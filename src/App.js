import './App.css';
import {Route, Link, BrowserRouter, Switch} from "react-router-dom"
import TodoList from './features/todos/components/TodoList';
import React from 'react';
import NotFoundPage from './features/notfound/NotFoundPage';
import DoneListContainer from './features/todos/components/DoneListContainer';

import { Layout, Menu } from 'antd';


function App() {


  const { Header, Content, Footer } = Layout;
<div>
  @import url(http://fonts.googleapis.com/css?family=Satisfy);
</div>

  return (
    <React.Fragment>
      <BrowserRouter>
      <Layout className="layout">
        <Content style={{ padding: '0 50px'}}>
          <Header>
            <div className="logo" />
            <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['1']}>
              
              <Menu.Item key={1}><Link to="/todos">To-do List</Link></Menu.Item>
              <Menu.Item><Link to="/done">Done List</Link></Menu.Item>
            </Menu>
          </Header>
          <Switch>
    
            <Route exact path="/todos" component={TodoList}></Route>
            <Route path="/done" component={DoneListContainer}></Route>
            <Route path="*" component={NotFoundPage}></Route>
          </Switch>
        </Content>
        <Footer style={{ textAlign: 'center', paddingTop: 300 }}>Ant Design ©2018 Created by Ant UED</Footer>
      </Layout>
    </BrowserRouter>

      
      </React.Fragment>
  );
}

export default App;
