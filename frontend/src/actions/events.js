import axios from "axios";
import { prepareEvents } from "../helpers/prepareEvents";
import { types } from "../types/types";


export const eventStartAddNew = (event) => {
    return async(dispatch) => {
        try {
            const {data} = await axios.post('http://localhost:3001/api/admin/calendar',event)
            if(data.ok){
              event._id = data._id
                dispatch(eventAddnew(event));
            }
        } catch (error) {
            console.log(error)
        }
    }   
}

const eventAddnew = (event) => ({
  type: types.eventAddNew,
  payload: event,
});

export const eventSetActive = (event) => ({
  type: types.eventSetActive,
  payload: event,
});

export const eventClearActiveEvent = () => ({
  type: types.eventClearActiveEvent,
});

export const updateEvents = (event) => {
  const {_id} = event
  return async (dispatch) => {
    try {
        const {data} = await axios.put(`http://localhost:3001/api/admin/calendar/${_id}`,event)
        if(data.ok){
          dispatch(eventUpdated(event))
        }else{
          console.log('No tienes permisos')
        }
      
    } catch (error) {
      console.log('error', error)
    }
  }
}

const eventUpdated = (event) => ({
  type: types.eventUpdated,
  payload: event,
});


export const DeletedEvent = () => {
    return async (dispatch, getState) => {
      const {_id} = getState().calendar.activeEvent;
      try {
        const {data} = await axios.delete(`http://localhost:3001/api/admin/calendar/${_id}`)
        dispatch(eventDeleted())
      } catch (error) {
        console.log(error)
      }
    }
}
const eventDeleted = () => ({ type: types.eventDeleted });


export const setError = (error) => ({
  type: types.setError,
  payload: error,
});

export const getEvents = () => {
  return async (dispatch) => {
    try {
      const {data} = await axios.get("http://localhost:3001/api/candidate/calendar");
      const events = prepareEvents(data)
      
      dispatch(setCalendarEvents(events))
    } catch (error) {
         dispatch(setError(error))
        }
  };
};
export const setCalendarEvents = (events) => ({
  type: types.setCalendarEvents,
  payload: events,
});
