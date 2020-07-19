// setup data layer
// track the basket

import React, { createContext, useContext, useReducer } from "react";

// Data Layer
export const StateContext = createContext();

// Provider 
export const StateProvider = ({reducer, initialState, children}) => (
    <StateContext.Provider value = {useReducer(reducer, initialState)}>
        {children}
    </StateContext.Provider>
);

// this is how we use it inide a component
export const useStateValue = () => useContext(StateContext);