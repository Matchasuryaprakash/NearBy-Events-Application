import React,{ useState, useContext, useEffect} from 'react';
import './UpComingEvents.css';
import {GlobalContext} from './GlobalState';

function UpComingEvents() {

    const { events  } = useContext(GlobalContext);
    let today = new Date()
    let filterList = events.length !== 0 ? events.filter(obj =>  new Date(obj['EventTime']) > new Date() ):[]
  return (
    <div className="UpComingEvents">
        <div className="TodayDate">{`TodayDate ---- ${today.toLocaleDateString("en-US")}`}</div>  
        <div>UpComingEvents</div>
        <ul>
        {
            filterList.length !==0 ?
            filterList.map( (d,i) =>
          <li key ={i}>
            <div className="contactMenuCard">
              <div className="contactName">{d.EventName} </div>
              <div className="contactName">{new Date(d.EventTime).toLocaleString()} </div>
              <div className="contactName">{d.EventLocation} </div>
              <div className="contactNumber">{d.EventCategory}</div>
            </div>
          </li> ): <div>NO Upcomming Events</div> 
          } 

        </ul>
    </div>
  );
}

export default UpComingEvents;