// redux/store.js
import { createStore } from 'redux';
import Cookies from 'js-cookie';


export const TOGGLE_DARK_MODE = 'TOGGLE_DARK_MODE';

export const SET_TOKEN = 'SET_TOKEN';

const initialState = {
  isDarkmode: JSON.parse(localStorage.getItem('isDarkmode')) || false,
  token: Cookies.get('token') || null,
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case TOGGLE_DARK_MODE:
      const newState = {
        ...state,
        isDarkmode: !state.isDarkmode,
      };
      localStorage.setItem('isDarkmode', JSON.stringify(newState.isDarkmode));
      return newState;
      case SET_TOKEN:
        Cookies.set('token', action.payload);
        return {
          ...state,
          token: action.payload, 
        };
    default:
      return state;
  }
};


const store = createStore(rootReducer);

export default store;
