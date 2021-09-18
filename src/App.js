import React from 'react';
import EventHome from './EventHome';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import './App.css';
import {GlobalProvider} from './GlobalState';
import EventList from './EventList'

function App() {
  return (
    <div className="App">
      <header className="App-header">
      <GlobalProvider>
      <BrowserRouter>
        <EventHome />
        <Switch>
          <Route path="/" exact component={EventList} />
          {/* <Route path="/contactList" exact component={contactList} />
          <Route path="/friendCircle" exact component={FriendCircle} /> */}
        </Switch>
      </BrowserRouter>
      </GlobalProvider>

      </header>
    </div>
  );
}

export default App;
