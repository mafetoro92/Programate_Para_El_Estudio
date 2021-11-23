import React, { createContext } from "react";

export const InscriptionContext = createContext();

const initialState = {
    name: "",
    email: "",
};

export const InscriptionProvider = ({ children }) => {
    return (
        <InscriptionContext.Provider value={{}}>
            {children}
        </InscriptionContext.Provider>
    );
};
