import React, { createContext, useReducer } from "react";
import AppReducer from "./reducer";

const initialState = {
  transactions: [
    {
      id: 1,
      text: "Salary",
      amount: 400,
    },
    {
      id: 2,
      text: "Flowers",
      amount: -100,
    },
    {
      id: 3,
      text: "Book",
      amount: -20,
    },
    
  ],
};

export const GlobalContext = createContext(initialState);

export const GlobalProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AppReducer, initialState);
  function deleteTransaction(id) {
    dispatch({
      type: "DELETE_TRANSACTION",
      payload: id,
    });
  }
  function addTransaction(transaction) {
    dispatch({
      type: "ADD_TRANSACTION",
      payload: transaction,
    });
  }

  return (
    <GlobalContext.Provider
      value={{
        transactions: state.transactions,
        dispatch,
        deleteTransaction,
        addTransaction,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};
