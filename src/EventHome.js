import React from 'react';
import {Link} from 'react-router-dom';
import './EventHome.css'

const EventHome = () => {
  return (
    <div className="EventHome">
        <ul id="menu">
              <Link to="/"><li>Home</li></Link>
              <Link to="/upcommingEventtList"><li>Up Coming Events</li></Link>
              <Link to="/nearByEvents"><li>Near By Events</li></Link>
        </ul>   
    </div>
  );
}

export default EventHome;
