import React, {createContext, useReducer} from 'react';
import AppReducer from './AppReducer';

const intialState = {
    events: [
        {EventName: "SampleNameOne", EventCategory: "EventCategoryOne",EventTime:"2021-09-25T15:03", EventLocation: "Hyderabad"},
        {EventName: "SampleNameTwo", EventCategory: "EventCategoryTwo",EventTime:"2021-09-25T15:03",  EventLocation: "Hyderabad"},
        {EventName: "SampleNameThree", EventCategory: "EventCategoryThree",EventTime:"2021-09-25T15:03",  EventLocation: "Hyderabad"}
    ]
}

export const GlobalContext = createContext(intialState);

export const GlobalProvider = ({children}) =>{
    const [state, dispatch] = useReducer(AppReducer, intialState)

    const removeEvents = (EventName) =>{
        dispatch({
            type: 'REMOVE_EVENT',
            payload: EventName
        })
    }

    const addEvents = (event) =>{
        dispatch({
            type: 'ADD_EVENT',
            payload: event
        })
    }

    return (
        <GlobalContext.Provider value={{ 
            events: state.events,
            removeEvents,
            addEvents
            }}>
            {children}
        </GlobalContext.Provider>
    )
}