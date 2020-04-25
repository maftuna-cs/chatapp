import React from 'react'
import { checkPropTypes } from 'prop-types';

const CTX = React.createContext();

function reducer(state, action) {
    switch(action.type) {
        
    }
}

export default function Store(props) {

    const reducerHook = React.useReducer(reducer, initState);

    return (
        <CTX.Provider value={}>
            {props.children}
        </CTX.Provider>
    )

}