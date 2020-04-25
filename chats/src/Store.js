import React from 'react'
import io from 'socket.io-client'
// import { checkPropTypes } from 'prop-types';

export const CTX = React.createContext();

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

let socket;

export default function Store(props) {

    if (!socket) {
        socket = io(':3001')

    }

    const [allChats] = React.useReducer(reducer, initState);

    return (
        <CTX.Provider value={{allChats}}>
            {props.children}
        </CTX.Provider>
    )

}