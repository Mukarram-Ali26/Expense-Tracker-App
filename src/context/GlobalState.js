import React, {createContext, useReducer} from 'react';

import AppReducer from './AppReducer';

// create initial values

const initialState = {
    transactions: [
        {id:1, desc:"first income", amount:10},
        {id:2, desc:"2nd income", amount:20},
        {id:3, desc:"payment", amount:-5},
        {id:4, desc:"2nd payment", amount:-2}


    ]
}

// create the global context
export const GlobalContext = createContext(initialState);


//create the provider for global context


export const GlobalProvider = ({children}) => {
    const [state, dispatch] = useReducer(AppReducer, initialState);
    return (
        <GlobalContext.Provider value={
            {
                transactions: state.transactions
            }
        }>
            {children}
        </GlobalContext.Provider>
    )
}
