import React from 'react'
import { checkPropTypes } from 'prop-types';

const CTX = React.createContext();

export default function Store(props) {

    return (
        <CTX.Provider value={}>
            {props.children}
        </CTX.Provider>
    )

}