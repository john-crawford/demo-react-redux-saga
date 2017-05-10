import "babel-polyfill"

import React from 'react'
import ReactDOM from 'react-dom'
import { createStore, applyMiddleware  } from 'redux'
import createSagaMiddleware from 'redux-saga'
import {Provider} from 'react-redux'

import reducer from './reducer'
import sagaDriver from './sagas'
import App from './App'

//create react-saga middleware
const sagaMiddleware = createSagaMiddleware()

//used for Redux DevTools browser extesion
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

//create the store
const store = createStore(
  reducer,
  composeEnhancers(
    applyMiddleware(sagaMiddleware)
  )
)

//run the saga driver
sagaMiddleware.run(sagaDriver)

//launch the app
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>
  ,
  document.getElementById('root')
)