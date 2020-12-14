import React, { createContext, useReducer } from 'react';

import AppReducer from './AppReducer';

// create initial values

const initialState = {
    transactions: []
}

// create the global context
export const GlobalContext = createContext(initialState);


//create the provider for global context


export const GlobalProvider = ({ children }) => {
    const [state, dispatch] = useReducer(AppReducer, initialState);

    // creating action to add transaction.
    function delTrans(id) {
        dispatch({
            type: "DELETE_TRANSACTION",
            payload: id
        });
    }

    function addTrans(transaction) {
        dispatch({
            type: "ADD-TRANSACTION",
            payload: transaction
        })
    }

    return (
        <GlobalContext.Provider value={
            {
                transactions: state.transactions,
                delTrans,
                addTrans
            }
        }>
            {children}
        </GlobalContext.Provider>
    )
}
