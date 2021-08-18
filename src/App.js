import './App.css';
import {Route, Link, BrowserRouter, Switch, HashRouter} from "react-router-dom"
import TodoList from './features/todos/components/TodoList';
import React from 'react';
import NotFoundPage from './features/notfound/NotFoundPage';
import DoneListContainer from './features/todos/components/DoneListContainer';


function App() {
// componentDidMount(){
//   getTodos().then(Response => {
//     this.props.initTodos(response.data);
//   })
// }

  return (
    <React.Fragment>
      <BrowserRouter>
      <ul>
        <Link to="/">Go to the todolist page</Link>
        <br></br>
        <Link to="/done">Go to the done list</Link>
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
