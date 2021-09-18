import React,{ useState, useContext, useEffect} from 'react';
import './UpComingEvents.css';
import {GlobalContext} from './GlobalState';

function UpComingEvents() {

    const { events  } = useContext(GlobalContext);
    let filterList = events.length !== 0 ? events.filter(obj =>  new Date(obj['EventTime']) > new Date() ):[]
  return (
    <div className="UpComingEvents">
        <div>UpComingEvents</div>
        <ul>
        {
            filterList.length !==0 ?
            filterList.map( (d,i) =>
          <li key ={i}>
            <div className="contactMenuCard">
              <div className="contactName">{d.EventName} </div>
              <div className="contactName">{d.EventTime} </div>
              <div className="contactName">{d.EventLocation} </div>
              <div className="contactNumber">{d.EventCategory}</div>
            </div>
          </li> ): null 
          } 

        </ul>
    </div>
  );
}

export default UpComingEvents;