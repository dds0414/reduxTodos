/**
 * Created by yangbo on 16/12/31.
 */
import React from 'react'
import { render } from 'react-dom'
import { createStore } from 'redux'
import { Provider } from 'react-redux'


import App from './components/App'
import reducers from './reducers/reducer'


let RootElement = document.getElementById('root');
let store = createStore(reducers);


render(
    <Provider store={store}>
        <App />
    </Provider>
    ,
    RootElement
);