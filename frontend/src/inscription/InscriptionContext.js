import React, { createContext, useState } from "react";
import { fetchClient } from "../helpers/fetch";

export const InscriptionContext = createContext();

const initialState = {
  send: false,
};

export const InscriptionProvider = ({ children }) => {

  const [inscription, setInscription] = useState(initialState);

  const inscribir = async (firstName, email) => {
      try {
        const resp = await fetchClient('staff/update-interview', {firstName, email}, 'PUT');
        console.log(resp)
      } catch (error) {
          console.log(error)
      }
  };

  return (
    <InscriptionContext.Provider
      value={{
        inscribir,
      }}
    >
      {children}
    </InscriptionContext.Provider>
  );
};
