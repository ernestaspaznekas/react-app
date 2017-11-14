import React, { Component } from 'react'
import { render } from 'react-dom'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import registerServiceWorker from './registerServiceWorker';

// Import the App container component
import App from './containers/App'

// Import the reducer and create a store
import { reducer } from './reducers/List'
const store = createStore(reducer)

// Pass the store into the Provider
const NewApp = (
    <Provider store={store}>
        <App />
    </Provider>
)

render(NewApp, document.getElementById('root'))
registerServiceWorker();