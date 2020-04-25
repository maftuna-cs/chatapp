import React from 'react'
import { checkPropTypes } from 'prop-types';

const CTX = React.createContext();

/*

from: 'user'
msg: 'hi'
topic: 'general'


state {
    topic1: [
        {msg}, {msg}, {msg}
    ]

    topic2: [
        {msg}, {msg}, {msg}
    ]
}
*/


const initState = {
    general: [
        {from: 'pianoclass', msg: 'hello'},
        {from: 'artclass', msg: 'hello'},
        {from: 'mathclass', msg: 'hello'}
    ],
    topic2: [
        {from: 'pianoclass', msg: 'hello'},
        {from: 'pianoclass', msg: 'hello'},
        {from: 'pianoclass', msg: 'hello'}
    ],
    
}

function reducer(state, action) {

    const {from, msg, topic} = action.payload;

    switch(action.type) {

        case 'RECEIVE_MESSAGE': 
        
        return {

            ...state,
            [topic]: [
                ...state,[topic],

                {from,msg}
            ]
                

        

        }
        default:
            return state
        

    }
}

export default function Store(props) {

    const reducerHook = React.useReducer(reducer, initState);

    return (
        <CTX.Provider value={reducerHook}>
            {props.children}
        </CTX.Provider>
    )

}