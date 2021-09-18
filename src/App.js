import React from 'react';
import EventHome from './EventHome';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import './App.css';
import {GlobalProvider} from './GlobalState';
import EventList from './EventList';
import UpComingEvents from './UpComingEvents';
import NearByEvents from './NearByEvents';

function App() {
  return (
    <div className="App">
      <header className="App-header">
      <GlobalProvider>
      <BrowserRouter>
        <EventHome />
        <Switch>
          <Route path="/" exact component={EventList} />
          <Route path="/upcommingEventtList" exact component={UpComingEvents} />
          <Route path="/nearByEvents" exact component={NearByEvents} /> 
        </Switch>
      </BrowserRouter>
      </GlobalProvider>

      </header>
    </div>
  );
}

export default App;
