import React, { useState,useContext } from 'react';
import {GlobalContext} from './GlobalState';
import {useHistory} from 'react-router-dom';


const useSignUpForm = (callback) => {
    const [inputs, setInputs] = useState({});
    const {events,addEvents} = useContext(GlobalContext)  
    const history = useHistory(); 
    const handleSubmit = (event) => {
      if (event) {
        event.preventDefault();
      } 
      addEvents(inputs)
      setInputs(inputs => ({...inputs, [event.target.name]: ''}));
      history.push('/')
    }
    const handleInputChange = (event) => {
      event.persist();
      setInputs(inputs => ({...inputs, [event.target.name]: event.target.value}));
    }
    return {
      handleSubmit,
      handleInputChange,
      inputs
    };
  }

  export default useSignUpForm;