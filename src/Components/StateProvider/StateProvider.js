import React, { createContext, useContext, useReducer } from "react";

// the StateContext prepares the dataLayer
export const StateContext = createContext();

// then the StateProvider Wraps our app and provides the Data layer
export const StateProvider = ({ reducer, initialState, children }) => (
	<StateContext.Provider value={useReducer(reducer, initialState)}>
		{children}
	</StateContext.Provider>
);

// the useStateValue pushes & pulls information from the data layer
export const useStateValue = () => useContext(StateContext);
