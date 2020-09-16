import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Header from './Components/Header/Header';
import TinderCards from './Components/TinderCards/TinderCards';
import Chats from './Components/Chats/Chats';
import ChatScreen from './Components/ChatScreen/ChatScreen';
import SwipeButtons from './Components/Footer/SwipeButtons';

import './App.css';

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/chat/:person">
            <Header backButton="/chat" />
            <ChatScreen />
          </Route>
          <Route path="/chat">
            <Header backButton="/" />
            <Chats />
          </Route>
          <Route path="/">
            <Header />
            <TinderCards />
            <SwipeButtons />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
