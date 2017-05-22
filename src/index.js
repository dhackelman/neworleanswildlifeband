import React from 'react';
import ReactDOM from 'react-dom';
import {browserHistory, Router, Route, IndexRoute} from 'react-router';
import './styles/app.css';
import App from './components/App';
import Main from './components/Main';
import MusicVideos from './components/MusicVideos';
import NotFound from './components/NotFound';

ReactDOM.render((
    <Router history={browserHistory}>
        <Route path='/' component={App}>
            <IndexRoute component={App}/>
              <Route path='main' component={Main}/>
              <Route path='musicvideos' component={MusicVideos}/>
              <Route path="*" component={NotFound}/>
        </Route>
    </Router>
), document.getElementById('main'));
