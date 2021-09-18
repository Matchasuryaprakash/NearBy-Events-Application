import React, { useState, useContext, useEffect} from 'react';
import './EventList.css';
import useSignUpForm from './userSignupFrom';
import {GlobalContext} from './GlobalState';


const  EventList = () => {
    const {inputs, handleInputChange, handleSubmit} = useSignUpForm();
    const { events, removeEvents } = useContext(GlobalContext);
    const [filterChoice, setFilterChoice] = useState('none');
    const [searchFilterText, setFilterText] = useState('')

    const changeFilter = (filterOption) =>{
        setFilterChoice(filterOption)
    }
    console.log(filterChoice)

    let filterList = filterChoice !== 'none'? events.filter(obj => obj[filterChoice].includes(searchFilterText)):[]

    return (
      <div className="ContactList"> 
        <form onSubmit={handleSubmit}>
            <div>
                <label className="ContactListItemLabel">EventName</label>
                <input type="text" className="ContactListItem" name="EventName" onChange={handleInputChange} value={inputs.EventName} required />&nbsp;
                <label className="ContactListItemLabel">Event Time</label>
                <input type="datetime-local"  className="ContactListItem"id="EventTime"  name="EventTime" onChange={handleInputChange} value={inputs.EventTime} required />
                <label className="ContactListItemLabel">Event Location</label>
                <input type="text"  className="ContactListItem"name="EventLocation" onChange={handleInputChange} value={inputs.EventLocation} required />
                <label className="ContactListItemLabel">Event Category</label>
                <input type="text"  className="ContactListItem" name="EventCategory" onChange={handleInputChange} value={inputs.EventCategory} required />
            </div>
            <button type="submit" className="addEvent">ADD Event</button>
        </form>
        <label>Filter Events</label>&nbsp;
        <select onChange={(event) => changeFilter(event.target.value)} value={filterChoice}>
            <option value="none">None</option>
            <option value="EventName">Event Name</option>
            <option value="EventLocation">Event Location</option>
            <option value="EventCategory">Event Category</option>
        </select>
        {
            filterChoice !== 'none'? <input type="text" name="filterChoice" onChange={e =>setFilterText(e.target.value)} required /> :null
        }
        <ul className="contactListDisplay">
          {
            events && events.length!==0 && searchFilterText.length === 0? events.map( (d,i) =>
          <li key ={i}>
            <div className="contactMenuCard">
              <div className="contactName">{d.EventName} </div>
              <div className="contactName">{new Date(d.EventTime).toLocaleString()} </div>
              <div className="contactName">{d.EventLocation} </div>
              <div className="contactNumber">{d.EventCategory} <div className="DeleteContact" onClick={()=>removeEvents(d.EventName)}> Delete Event</div></div>
            </div>
          </li> ) :null
          }
          {
            searchFilterText.length !==0 ?
            filterList.map( (d,i) =>
          <li key ={i}>
            <div className="contactMenuCard">
              <div className="contactName">{d.EventName} </div>
              <div className="contactName">{new Date(d.EventTime).toLocaleString()} </div>
              <div className="contactName">{d.EventLocation} </div>
              <div className="contactNumber">{d.EventCategory} <div className="DeleteContact" onClick={()=>removeEvents(d.EventName)}> Delete Event</div></div>
            </div>
          </li> ): null 
          } 

        </ul> 
      </div>
    );
  }
  
  export default EventList;