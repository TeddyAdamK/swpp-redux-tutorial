import React from 'react';
import './App.css';

import TodoList from './containers/TodoList/TodoList';
import RealDetail from './components/RealDetail/RealDetail';
import NewTodo from './containers/TodoList/NewTodo/NewTodo';

import { BrowserRouter, Route, Redirect, Switch } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Switch>
          <Route path='/todos' exact render={() => <TodoList title="My TODOs!" />} />
          <Route path='/todos/:id' exact component={RealDetail} />
          <Route path='/new-todo' exact component={NewTodo} />
          <Redirect exact from='/' to='/todos' />
          <Route render={() => <h1>Not Found</h1>} />
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
