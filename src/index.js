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
        <Route path='/neworleanswildlifeband/' component={App}>
            <IndexRoute path='/' component={Landing}/>
              <Route path='/neworleanswildlifeband/about' component={About}/>
              <Route path='/neworleanswildlifeband/music' component={Music}/>
              <Route path='/neworleanswildlifeband/videos' component={Videos}/>
              <Route path='/neworleanswildlifeband/photos' component={Photos}/>
              <Route path='/neworleanswildlifeband/calendar' component={Calendar}/>
              <Route path='/neworleanswildlifeband/contact' component={Contact}/>
              <Route path='/neworleanswildlifeband/links' component={Links}/>
              <Route path="/neworleanswildlifeband/" component={NotFound}/>
        </Route>
    </Router>
), document.getElementById('main'));
