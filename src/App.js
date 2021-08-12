import React from 'react';
import './main.scss';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { TasksView } from './views/TasksView/TasksView';
import { NotesView } from './views/NotesView/NotesView';
import { CreateView } from './views/CreateView/CreateView';
import {Nav} from './components/Nav/Nav';

export const App = () => {
  return (
    <div className="App">
      <Router>
      <Switch>
          <Route exact path='/tasks' component={TasksView}/>
          <Route path='/notes' component={NotesView}/>
          <Route path='/create' component={CreateView}/>
      </Switch>
      <Nav/>
      </Router>
    </div>
  );
}

