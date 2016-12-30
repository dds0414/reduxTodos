/**
 * Created by yangbo on 2016/12/30.
 */
import React from 'react'
import { render } from 'react-dom'
import { createStore } from 'redux'
import { Provider } from 'react-redux'



//component
import App from './Components/App'
import Reducer from './Reducers/Reducer'



let store = createStore(Reducer);
let rootElement =  document.getElementById('root');

render(
    <Provider store={store}>
        <App />
    </Provider>
    ,
    rootElement);
