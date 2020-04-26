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

function sendChatAction(value) {
    socket.emit('chat message', value);

}

export default function Store(props) {

    const [allChats, dispatch] = React.useReducer(reducer, initState);

    if (!socket) {
        socket = io(':3001');
        socket.on('chat message', function(msg){
            dispatch({type:'RECEIVE_MESSAGE', payload: msg});
          });

    }

    const user = 'pianoclass' + Math.random(100).toFixed(2)

    

    return (
        <CTX.Provider value={{allChats, sendChatAction, user}}>
            {props.children}
        </CTX.Provider>
    )

}