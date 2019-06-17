import { createStore, applyMiddleware } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import thunkMiddleware from 'redux-thunk'
import axios from 'axios'

const initialState = {
  swapi: null,
}

export const actionTypes = {
  SWAPI: 'SWAPI',
}

// REDUCERS
export const reducer = (state = initialState, action) => {
  if(action.type == actionTypes.SWAPI){
    return{
      ...state,
      swapi: action.payload
    }
  }
  else{
    return state;
  }
}

// ACTIONS

export function fetchItems () {
  return dispatch => axios.get('https://swapi.co/api/people/1/')
      .then(({ data }) => data)
      .then(items => dispatch({ type: actionTypes.SWAPI, payload: items }));
}

export function initializeStore (initialState) {
  return createStore(
    reducer,
    initialState,
    composeWithDevTools(applyMiddleware(thunkMiddleware))
  )
}
