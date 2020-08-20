import React from 'react';
import './App.css';

import LoginPage from './components/loginPage/loginPage.js'
import Profile from './components/profile/profile'
import Navbar from './components/navbar/navbar'
import TopStuff from './components/topStuff/topStuff'
import Artist from './components/topStuff/artist/artist'
import TrackInfo from './components/trackInfo/trackInfo'
import TrackInfoSpecific from './components/trackInfo/trackInfoSpecific/trackInfoSpecific';
import Recents from './components/recents/recents'
import { token } from './spotifyToken/spotify';
import { Router, Route, Switch } from 'react-router-dom'

import { createBrowserHistory } from 'history';
export const appHistory = createBrowserHistory();

function App() {

  if (token) {
    return (
      <Router history={appHistory}>
        <div className="App">
          <Navbar />
          <Switch>
            <Route exact path='/' component={Profile} />
            <Route exact path='/topStuff' component={TopStuff} />
            <Route path='/topStuff/:id' component={Artist} />
            <Route exact path='/trackInfo' component={TrackInfo} />
            <Route path='/trackInfo/:track' component={TrackInfoSpecific} />
            <Route path='/recents' component={Recents} />
          </Switch>
        </div>
      </Router>
    )
  } else {
    return <LoginPage />
  }
}

export default App;
