import React from 'react';
import ReactDOM from 'react-dom';
import {browserHistory, Router, Route, IndexRoute} from 'react-router';
import './styles/app.css';
import App from './components/App';
import About from './components/About';
import Landing from './components/Landing';
import Music from './components/Music';
import Videos from './components/Videos';
import Photos from './components/Photos';
import Calendar from './components/Calendar';
import Contact from './components/Contact';
import Links from './components/Links';
import NotFound from './components/NotFound';

ReactDOM.render((
    <Router history={browserHistory}>
        <Route path='/' component={App}>
            <IndexRoute component={Landing}/>
              <Route path='about' component={About}/>
              <Route path='music' component={Music}/>
              <Route path='videos' component={Videos}/>
              <Route path='photos' component={Photos}/>
              <Route path='calendar' component={Calendar}/>
              <Route path='contact' component={Contact}/>
              <Route path='links' component={Links}/>
              <Route path="*" component={NotFound}/>
        </Route>
    </Router>
), document.getElementById('main'));
