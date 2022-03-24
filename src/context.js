import React, { createContext, useContext, useReducer } from "react";
export const initialState = null;
export const context = createContext();
export const reducer = (state, action) => {
  switch (action.type) {
    case "GET_SEARCH":
      return (state = action.payload);

    default:
      return state;
  }
};
function Context({ children }) {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <context.Provider value={{ state, dispatch }}>{children}</context.Provider>
  );
}

export default Context;
export const Getdata = () => useContext(context);
