import { createStore, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';

const initialState = {
    isLoggedIn: false,
    personData: {name : 'sheel', id:7787},
    isConnected: false,
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case "setLoggedIn":
            return { ...state, isLoggedIn: action.value };

        case "setPersonData":
            return { ...state, personData: action.value };

        case 'CHANGE_CONNECTION_STATUS':
            return { ...state, isConnected: action.value };
        default:
            return state;
    }
};

//
// Store...
//

const store = createStore(reducer, applyMiddleware(thunkMiddleware));
export { store };


//
// Action Creators...
//

const setLoggedIn = (setLoggedIn) => {
    return {
        type: "setLoggedIn",
        value: setLoggedIn,
    };
}

const setPersonData = (personData) => {
    return {
        type: "setPersonData",
        value: personData
    };
}
const connectionState = ({ status }) => {
    return {
        type: 'CHANGE_CONNECTION_STATUS',
        value: status
    };
};

export { setLoggedIn, setPersonData, connectionState };