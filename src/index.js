import React from 'react';
import ReactDOM from 'react-dom';
import {createStore} from 'redux'
import {Provider} from 'react-redux'
import CourseManager from './containers/CourseManager'
import '../node_modules/font-awesome/css/font-awesome.min.css';
import '../node_modules/bootstrap/dist/css/bootstrap.css';
import widgetReducer from './reducers/widgetReducer'

let store = createStore(widgetReducer)

ReactDOM.render(
    <Provider store={store}>
        <CourseManager/>
    </Provider>,
document.getElementById('root')
);