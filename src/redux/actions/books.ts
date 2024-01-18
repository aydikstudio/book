// @ts-nocheck

import axios from "axios";


const optionsLoaded = payload => ({
    type: 'OPTIONS_LOADED',
    payload,
  })
  
const setOptions = payload => ({
    type: 'SET_OPTIONS',
    payload,
  })
  
  const fetchOptions = (link = "", count) => async dispatch => {
    try {
      dispatch(optionsLoaded(false))
  
   

        const items = await fetch(process.env.REACT_APP_SOURCE+ link+ "&maxResults="+count+"&").then(response =>
            response.json(),
          )
    
          
          dispatch(setOptions(items.items))
        
        
    
    } catch (error) {
      throw new Error(error)
    }
  }



  export default fetchOptions
  

