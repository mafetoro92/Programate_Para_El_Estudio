import React, { useReducer, createContext, useState } from "react";
import Reducer from './reducer'
import axios from "axios";
import { GET_PROFILE, GET_PROFILES, GET_CONVOCATORYS, PUT_PARAMETERIZATION } from "./reducer";

export const providerContext = createContext();

const StateContext = ({ children }) => {
  const initialState = {
    profiles: [],
    profile: null,
    convocatorys: [],
    convocatory: null,
    parameterization: null,

  };
  const [profileT, setProfileT] = useState([])
  const url = 'http://localhost:3001/api'
  const [state, dispatch] = useReducer(Reducer, initialState)

  const getProfiles = async () => {
    try {

      const response = await axios.get(`${url}/candidate/profile`);
      setProfileT(response.data)
    } catch (e) {
      console.log(e)
    }
  }
  const getProfile = async (id) => {
    try {
      const response = await axios.get(`${url}/candidate/profile/${id}`);
      dispatch({
        type: GET_PROFILE,
        payload: response.data
      });

    } catch (e) {
      console.log(e)
    }
  }
  const getConvocatorys = async () => {
    try {
      const response = await axios.get(`${url}/admin/c`)
      dispatch({
        type: GET_CONVOCATORYS,
        payload: response.data
      })
      // console.log(response)
    } catch (e) {
      console.log(e)
    }
  }

  const putParameterization = () => {}

  return (
    <providerContext.Provider value={{
      profile: state.profile,
      profiles: state.profiles,
      convocatorys: state.convocatorys,
      parameterization: state.parameterization,
      profileT,
      getProfile,
      getProfiles,
      getConvocatorys,
      putParameterization

    }}>
      {children}
    </providerContext.Provider>
  )
}
export default StateContext